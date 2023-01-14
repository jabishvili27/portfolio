import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  socialMedia: any[] = [
    {
      link: 'https://www.linkedin.com/in/toma-jabishvili-99a479211/',
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'mailto://jabishvili27@gmail.com',
      name: 'Email',
      icon: 'fas fa-envelope',
    },
    {
      link: 'https://github.com/jabishvili27',
      name: 'Github',
      icon: 'fab fa-github',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
