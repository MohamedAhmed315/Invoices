import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  delete_client() {
    console.log('Client Deleted Successfully');
  }
  ngOnInit(): void {
  }

}
