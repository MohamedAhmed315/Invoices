import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview-expense',
  templateUrl: './preview-expense.component.html',
  styleUrls: ['./preview-expense.component.scss']
})
export class PreviewExpenseComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl',
    });
  }
  
  ngOnInit(): void {
  }
}
