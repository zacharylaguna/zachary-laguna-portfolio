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
    this.document.location.href = 'http://3.20.71.118:5000/';
  }
  
  goToLyricCode() {
    this.document.location.href = 'https://github.com/zacharylaguna/lyric-retriever';
  }

  goToBaby() {
    this.document.location.href = 'https://drive.google.com/drive/folders/11k6lYF7ScDIxzzvbVaWI3ZNNwwv0Py6N?usp=sharing';
  }

  goToRealMgmt() {
    this.document.location.href = 'http://3.17.248.106:3000/';
  }

  goToRealMgmtCode() {
    this.document.location.href = 'https://github.com/zacharylaguna/real-mgmt';
  }

}
