import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  type_value: string = 'Individual';
  constructor(private modalService: NgbModal) { }

  editClientForm = new FormGroup({
    edit_client_name: new FormControl('', [Validators.required]),
    edit_client_address: new FormControl('', [Validators.required]),
    edit_client_email: new FormControl('', [Validators.required, Validators.email]),
    edit_client_phone: new FormControl('', [Validators.required]),
    edit_client_fax: new FormControl('', [Validators.required]),
    edit_client_website: new FormControl('', [Validators.required]),
  });
  
  open_modal(content: any) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
    });
  }

  change_type_value(el: HTMLElement) {
    this.type_value = el.innerHTML;
  }

  editClient() {
    console.log('Client edited successfully');
  }

  ngOnInit(): void {
  }

}
