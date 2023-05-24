import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-team-member',
  templateUrl: './new-team-member.component.html',
  styleUrls: ['./new-team-member.component.scss']
})
export class NewTeamMemberComponent implements OnInit {

  role_value: string = 'User';
  constructor(private modalService: NgbModal) { }

  NewMemberForm = new FormGroup({
    member_name: new FormControl('', [Validators.required]),
    member_email: new FormControl('', [Validators.required, Validators.email]),
  })


  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  formSubmit() {
    console.log('Team member added successfully');
  }

  change_role_value(el: HTMLElement){
    this.role_value = el.innerHTML;
  }

  ngOnInit(): void {
  }

}
