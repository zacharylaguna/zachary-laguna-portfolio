import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  fujitsu_swe: any;
  fujitsu_intern: any;
  tamu_teaching: any;
  nvidia_ml: any;

  constructor() { }

  ngOnInit(): void {
    this.fujitsu_swe = {
      labels: ['Docker', 'Redis', 'C++', 'Angular (Frontend)', 'Flask (Python)', 'AWS'],
      datasets: [
        {
          data: [40, 20, 10, 10, 10, 10],
          backgroundColor: [ // https://brandcolors.net/
            "#0db7ed",
            "#d82c20",
            "#800080",
            "#b52e31",
            "#ffde57",
            "#ff9900"
          ],
          hoverBackgroundColor: [ // https://www.w3schools.com/colors/colors_picker.asp
            "#aadcee", // 80% white
            "#f2aba6",
            "#ff99ff",
            "#eaaeaf",
            "#ffeb99",
            "#ffd699"
          ]
        }
      ]
    };
    this.fujitsu_intern = {
      labels: ['Angular (Frontend)', 'Flask (Python)', 'Docker'],
      datasets: [
        {
          data: [50, 40, 10],
          backgroundColor: [ // https://brandcolors.net/
            "#b52e31",
            "#ffde57",
            "#0db7ed"
          ],
          hoverBackgroundColor: [ // https://www.w3schools.com/colors/colors_picker.asp
            "#eaaeaf",
            "#ffeb99",
            "#aadcee" // 80% white
          ]
        }
      ]
    };
    this.tamu_teaching = {
      labels: ['Python'],
      datasets: [
        {
          data: [100],
          backgroundColor: [
            "#ffde57"
          ],
          hoverBackgroundColor: [
            "#ffeb99"
          ]
        }
      ]
    };
    this.nvidia_ml = {
      labels: ['Machine Learning Fundamentals'],
      datasets: [
        {
          data: [100],
          backgroundColor: [
            "#76b900"
          ],
          hoverBackgroundColor: [
            "#daff99"
          ]
        }
      ]
    };
  }

}
