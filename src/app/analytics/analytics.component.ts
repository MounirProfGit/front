import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  dataName = 'Mails sent';
  data = [{date: '1', value:'100'}, {date: '2', value:'140'}, {date: '3', value:'89'}]
  constructor() { }

  ngOnInit(): void {
  }

}
