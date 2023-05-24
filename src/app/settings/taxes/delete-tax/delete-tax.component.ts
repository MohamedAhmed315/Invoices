import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-tax',
  templateUrl: './delete-tax.component.html',
  styleUrls: ['./delete-tax.component.scss']
})
export class DeleteTaxComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  delete_tax() {
    console.log('Tax Deleted Successfully');
  }
  ngOnInit(): void {
  }

}
