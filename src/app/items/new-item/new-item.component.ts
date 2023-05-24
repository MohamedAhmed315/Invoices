import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  NewItemForm = new FormGroup({
    item_name: new FormControl('', [Validators.required]),
    item_price: new FormControl('', [Validators.required]),
    item_quantity: new FormControl('', [Validators.required]),
    item_desc: new FormControl('', [Validators.required]),
  });

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  new_item() {
    console.log('Item added successfully');
  }

  ngOnInit(): void {
  }

}
