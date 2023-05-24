import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserChangePassword } from './change-password.model';
import { ChangePasswordService } from './change-password.service';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordModel:UserChangePassword

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute ,
              private changePasswordService:ChangePasswordService) { }

  ChangePasswordForm = new FormGroup({
    old_password: new FormControl('', [Validators.required]),
    passwords: new FormGroup(
      {
        new_password: new FormControl('', [Validators.required]),
        confirm_new_password: new FormControl('', [Validators.required])
      },[PasswordValidators.MatchValidator('new_password', 'confirm_new_password')]
      )
  },
  );

  get passwordMatchError() {
    return (
      this.ChangePasswordForm.get('passwords')?.getError('mismatch') &&
      this.ChangePasswordForm.get('passwords.confirm_new_password')?.touched
    );
  }



  formSubmit() {
  this.changePasswordService.ChangePasswordService(
    this.changePasswordModel={
      "OldPassword":this.ChangePasswordForm.get('old_password')?.value!,
      "Password":this.ChangePasswordForm.get('passwords.new_password')?.value!,
      "ConfirmPassword":this.ChangePasswordForm.get('passwords.confirm_new_password')?.value!,
    }
  )
  }

  ngOnInit(): void {
 
  }
}
