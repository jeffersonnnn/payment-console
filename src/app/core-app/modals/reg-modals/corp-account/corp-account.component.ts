import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corp-account',
  templateUrl: './corp-account.component.html',
  styleUrls: ['./corp-account.component.scss']
})
export class CorpAccountComponent implements OnInit {

  show = true;

  accountName = 'ABC Company Ltd';

  constructor() { }

  ngOnInit() {
  }

}

