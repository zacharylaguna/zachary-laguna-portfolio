import { Component, Inject, OnInit } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  goToLyric() {
    this.document.location.href = 'http://lyricretriever-env.eba-ftppkhi3.us-east-2.elasticbeanstalk.com/';
  }

}
