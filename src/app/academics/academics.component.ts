import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng-lts/api';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  value: number = 100;

  events1: any[] = [];
    
  events2: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.events1 = [
        {status: 'MS in Computer Science', date: '5/1/2025', icon: PrimeIcons.REFRESH, color: '#1C448E', image: '', text: 'I am currently pursuing a master\'s degree in computer science, with a dual focus on artificial intelligence and cybersecurity. My studies are designed to bridge the gap between advanced algorithms and data protection techniques. On the machine learning side, I delve into a range of topics, from foundational concepts like supervised and unsupervised learning to more complex areas like neural networks and deep learning. I work with various tools and frameworks such as TensorFlow and PyTorch, gaining hands-on experience in building, training, and deploying machine learning models. In cybersecurity, I study the principles of computer and network security, learning about threat vectors, cryptographic techniques, and secure software development. I explore real-world case studies and gain practical skills in ethical hacking and penetration testing, aiming to understand and mitigate security vulnerabilities. The combination of these two fields allows me to approach problems from a unique perspective, emphasizing both the development of intelligent systems and the safeguarding of data and systems. Through coursework, projects, and research, I aim to build a solid foundation that will enable me to contribute to cutting-edge advancements in technology while maintaining a strong focus on security and privacy.'},
        {status: 'Fujitsu Software Engineer', date: '6/1/2022', icon: PrimeIcons.REFRESH, color: '#1C448E', image: '', text: ''},
        {status: 'BS in Computer Engineering', date: '12/1/2022', icon: PrimeIcons.CHECK, color: 'green', text: ''},
        {status: 'Senior Year', date: '8/1/2021', icon: PrimeIcons.CHECK, color: 'green', text: 'During my senior year of college, I engaged in enriching projects, which further developed my skills as a software engineer. It was here where I learned many full stack skills. I learned how to create Restful APIs, webservers, HTML/CSS/Javascript webpages, and much more. Frameworks were used to ease the develpment process so I learned Flask, Angular, and React. I started the year with my capstone where I created a robotic chef, which could accurately dispense ingredients On demand Through a web application. The next semester, I created a CRUD application, which used a relational database in order to manage real estate properties. My final project of my senior year was a Baby AI monitor, which could monitor the movements of a baby, and detect whether or not it was reaching the edge of the crib. I developed quit applications for all three of these projects, integrating both the hardware with software. I worked on everything from the robotics code to the web application. I love setting up my applications on Amazon Web Services because I enjoy being able to access it from anywhere. This got me interested in cloud, technology and so I devlved deepeer into the subject. As a result of having both of my projects on the cloud, I learned quite a bit about cloud technology, and how to create scalable and available cloud applications.'},
        {status: 'Fujitsu Software Engineering Intern', date: '6/1/2021', icon: PrimeIcons.CHECK, color: 'green', text: ''},
        {status: 'Junior Year', date: '8/1/2020', icon: PrimeIcons.CHECK, color: 'green', text: 'During my junior year, I expanded my knowledge about theory and the mathematics behind computer science. I also learned about circuitry and designing circuits to perform specific tasks common to engineering. This is also where I started to interact with GIT more and save all my work on GitHub.'},
        {status: 'Sophomore Year', date: '8/1/2019', icon: PrimeIcons.CHECK, color: 'green', text: 'This year was dedicated to introductory theory in both circuitry and computer science. Here we learned data structures, such as lists, linked lists, trees, and graphs. We also learned several algorithms which could be used to interact with these data structures. We learned about time efficiency - big O notation.'},
        {status: 'Freshman Year', date: '8/1/2018', icon: PrimeIcons.CHECK, color: 'green', text: 'Freshman year was dedicated to learning foundational concepts, which would be used later on. Here we learned python, as well as calculus, physics and chemistry. We learned a variety of topics to round out our educational career.'},
    ];

    this.events2 = [
        "2020", "2021", "2022", "2023"
    ];
  }

}
