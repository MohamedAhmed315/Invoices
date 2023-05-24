import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.scss']
})
export class DeleteExpenseComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  delete_expense() {
    console.log('Expense Deleted Successfully');
  }
  
  ngOnInit(): void {
  }

}
