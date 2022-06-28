import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [
    {
      name: 'weather app',
      tech: 'Vanilla JavaScript, Html, Css',
      link: 'https://jabishvili27.github.io/weather/',
      gitRepo: 'https://github.com/jabishvili27/weather',
      img: 'assets/images/weather.png',
    },
    {
      name: 'to do app',
      tech: 'angular',
      link: 'Link not available',
      gitRepo: 'https://github.com/jabishvili27/todoo',
      img: 'assets/images/todo.png',
    },
    {
      name: 'shoppyon',
      tech: 'javascript',
      link: 'https://jabishvili27.github.io/project/',
      gitRepo: 'https://github.com/jabishvili27/project',
      img: 'assets/images/shoppyon.png',
    },
    {
      name: '21 game',
      tech: 'js',
      link: 'https://jabishvili27.github.io/21/',
      gitRepo: 'https://github.com/jabishvili27/21',
      img: 'assets/images/21.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
