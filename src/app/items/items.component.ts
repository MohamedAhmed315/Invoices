import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewItemComponent } from './new-item/new-item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  page_number: number = 1;
  itemPerPage: number = 10;
  isEdit: boolean = true;
  items: object[] = [{ name: 'Item 1', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dicta autem.", unitPrice: 3000, quantity: 2, totalPrice: 6000 }];

  EditItemForm = new FormGroup({
    item_name: new FormControl('', [Validators.required]),
    item_price: new FormControl('', [Validators.required]),
    item_quantity: new FormControl('', [Validators.required]),
    item_desc: new FormControl('', [Validators.required]),
  });

  constructor(private newItem: NewItemComponent) { }

  edit_item() {
    console.log('Item Edited Successfully');
  }

  ngOnInit(): void {
  }

}
