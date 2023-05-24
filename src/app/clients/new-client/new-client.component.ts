import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  type_value: string = 'Individual';
  constructor(private modalService: NgbModal) { }
  
  NewClientForm = new FormGroup({
    client_name: new FormControl('', [Validators.required]),
    client_address: new FormControl('', [Validators.required]),
    client_email: new FormControl('', [Validators.required, Validators.email]),
    client_phone: new FormControl('', [Validators.required]),
    client_fax: new FormControl('', [Validators.required]),
    client_website: new FormControl('', [Validators.required]),
  });

  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  change_type_value(el: HTMLElement){
    this.type_value = el.innerHTML;
  }

  addClient() {
    console.log('Client added successfully');
  }

  ngOnInit(): void {
  }

}
