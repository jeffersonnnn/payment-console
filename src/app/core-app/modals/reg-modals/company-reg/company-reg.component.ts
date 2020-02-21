import { Component, ViewEncapsulation, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CompanyRegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // openModal() {
  //   $('#exampleModalLong').modal();
  // }

}
