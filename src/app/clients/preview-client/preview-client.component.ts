import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview-client',
  templateUrl: './preview-client.component.html',
  styleUrls: ['./preview-client.component.scss']
})
export class PreviewClientComponent implements OnInit {

  website: string = 'www.google.com'
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
