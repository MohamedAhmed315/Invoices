import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewExpenseComponent } from '../new-expense/new-expense.component';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

  constructor(private modalService: NgbModal, private newExpense: NewExpenseComponent) { }

  EditExpenseForm = new FormGroup({
    expense_desc: new FormControl('', [Validators.required]),
    expense_total: new FormControl('', [Validators.required]),
  });

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  ngOnInit(): void {

  }

}
