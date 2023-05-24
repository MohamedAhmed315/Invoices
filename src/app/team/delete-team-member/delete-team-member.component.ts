import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-team-member',
  templateUrl: './delete-team-member.component.html',
  styleUrls: ['./delete-team-member.component.scss']
})
export class DeleteTeamMemberComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  delete_member() {
    console.log('Member Deleted Successfully');
  }

  ngOnInit(): void {
  }
}
