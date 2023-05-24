import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-team-member',
  templateUrl: './edit-team-member.component.html',
  styleUrls: ['./edit-team-member.component.scss']
})
export class EditTeamMemberComponent implements OnInit {
  role_value: string = 'User';
  constructor(private modalService: NgbModal) { }

  EditMemberForm = new FormGroup({
    member_name: new FormControl('', [Validators.required]),
    member_email: new FormControl('', [Validators.required, Validators.email]),
  })

  change_role_value(el: HTMLElement) {
    this.role_value = el.innerHTML;
  }

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  formSubmit() {
    console.log('Team member edited successfully');
  }

  ngOnInit(): void {
  }

}
