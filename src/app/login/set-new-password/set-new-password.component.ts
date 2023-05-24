import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss']
})
export class SetNewPasswordComponent implements OnInit {

  show_success_Alert: boolean = false;
  show_failure_alert: boolean = false;

  newPasswordForm = new FormGroup({
    new_password: new FormControl('', [Validators.required]),
    confirm_new_password: new FormControl('', [Validators.required])
  })


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  formSubmit() {
    this.show_success_Alert = true;
    this.router.navigate(['/dashboard'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
  }

}
