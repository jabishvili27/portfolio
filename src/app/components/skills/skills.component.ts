import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  mySkills: any[] = [
    {
      icon: 'fab fa-html5',
      skill: 'Html',
      level: 'Intermediate - Pro',
    },
    {
      icon: 'fab fa-css3',
      skill: 'Css',
      level: 'Intermediate - Pro',
    },
    {
      icon: 'fab fa-js-square',
      skill: 'JavaScript',
      level: 'Intermediate',
    },

    {
      icon: 'fab fa-angular',
      skill: 'Angular',
      level: 'Intermediate',
    },

    {
      icon: 'fas fa-code',
      skill: 'TypeScript',
      level: 'Intermediate',
    },
    {
      icon: 'fab fa-node-js',
      skill: 'Node Js',
      level: 'Beginner',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
