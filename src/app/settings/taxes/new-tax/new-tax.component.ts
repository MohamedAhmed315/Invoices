import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-tax',
  templateUrl: './new-tax.component.html',
  styleUrls: ['./new-tax.component.scss']
})
export class NewTaxComponent implements OnInit {

  NewTaxForm = new FormGroup({
    new_tax_name: new FormControl('', [Validators.required]),
    new_tax_rate: new FormControl('', [Validators.required]),
  });

  constructor(private modalService: NgbModal) { }

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  newtax() {
    console.log('Tax added successfully');
    
  }

  ngOnInit(): void {
  }

}
