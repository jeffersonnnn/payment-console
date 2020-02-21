import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biz-info',
  templateUrl: './biz-info.component.html',
  styleUrls: ['./biz-info.component.scss']
})
export class BizInfoComponent implements OnInit {
  companyName = 'ABC Company Ltd Business';

  constructor() { }

  ngOnInit() {
  }

}
