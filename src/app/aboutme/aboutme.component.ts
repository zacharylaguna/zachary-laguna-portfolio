import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  value1: number = 5;
  value2: number = 5;
  value3: number = 5;
  value4: number = 2;
  value5: number = 2;
  value6: number = 1;
  value7: number = 2;
  value8: number = 1;
  value9: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
