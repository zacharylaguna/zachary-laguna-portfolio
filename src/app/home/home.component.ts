import { Component, OnInit } from '@angular/core';
// declare const getpathlength: any;
declare function getpathlength(): any;
// declare var $:any;
// import * as $ from 'jquery';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  // }

  ngOnInit() {
    // $('button').click(function() { // jquery
    //     alert('code from GeeksForGeeks; jQuery works on p-button and button bc primeng likely uses stock button');
    //     // getpathlength(); /./ already imported with declare function; activate this inside to run on init
    // });
    // $('#jquerytestbutton').click(function() { // jquery
    //     alert('this popup only appears on match');
    //     // getpathlength(); /./ already imported with declare function; activate this inside to run on init
    // });
  }

}
