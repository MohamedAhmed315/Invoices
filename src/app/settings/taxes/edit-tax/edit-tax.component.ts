import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-tax',
  templateUrl: './edit-tax.component.html',
  styleUrls: ['./edit-tax.component.scss']
})
export class EditTaxComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  EditTaxForm = new FormGroup({
    edit_tax_name: new FormControl('', [Validators.required]),
    edit_tax_rate: new FormControl('', [Validators.required]),
  });

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  edittax() {
    console.log('Tax Edited Successfully');
    
  }

  ngOnInit(): void {
  }

}
