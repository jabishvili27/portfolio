import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  otherDetails: any[] = [
    {
      key: 'Place',
      icon: 'fas fa-map-marker-alt',
      value: 'tbilisi,georgia',
    },
    {
      icon: 'fas fa-graduation-cap',
      key: 'university',
      value: 'caucasus university',
    },
    {
      icon: 'fas fa-school',
      key: 'College',
      value: 'Tbilisi School of Communication',
    },
    {
      icon: 'fas fa-user-alt',
      key: 'Age',
      value: '21 years',
    },
    {
      icon: 'fas fa-birthday-cake',
      key: 'Date of Birth',
      value: '27 oct 2000',
    },
    {
      icon: 'fas fa-email',
      key: 'Email',
      value: 'jabishvili27@gmail.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
