import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('home') home!: ElementRef;
  tl = gsap.timeline();
  socialMedia: any[] = [
    {
      link: 'https://www.linkedin.com/in/toma-jabishvili-99a479211/',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'https://github.com/jabishvili27',
      icon: 'fab fa-github',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
