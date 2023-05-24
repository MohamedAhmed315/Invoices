import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  NewExpenseForm = new FormGroup({
    expense_desc: new FormControl('', [Validators.required]),
    expense_total: new FormControl('', [Validators.required]),
  })

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl',
    });
  }

  addExpense() {
    console.log('Expense added successfully');
  }

  editExpense() {
    console.log('Expense edited successfully');
  }

  ngOnInit(): void {
  }

}
