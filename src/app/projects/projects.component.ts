import { Component, Inject, OnInit } from '@angular/core';

import { DOCUMENT } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  responseData: any;

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  sendGetRequest() {
    const url = 'https://eswjsxyoq3t3jbt3ybwephxbx40ncfgf.lambda-url.us-east-2.on.aws/'; // Change to your target URL
    this.http.get(url).subscribe(
      response => {
        this.responseData = response; // Store the response data
      },
      error => {
        console.error('Error occurred:', error);
      }
    );
  }

}
