import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '@app/core/services/modal.service';
// import { ModalComponent } from '@app/shared/modal/modal.component';

declare const $: any;

@Component({
  selector: 'app-activateregistered-b',
  templateUrl: './activateregistered-b.component.html',
  styleUrls: ['./activateregistered-b.component.scss']
})
export class ActivateregisteredBComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

  openCompanyModal() {
    $('#companyReg').modal();
  }

  openBizModal() {
    $('#bizInfo').modal();
  }

  openCorporateModal() {
    $('#corpAccount').modal();
  }
  sendActivationReq() {
    $('#thankYou').modal();
  }
}
