import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  value: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
