import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
declare let ScrollReveal: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animations();
  }
  animations(): void {
    let scrollSettings: any = {
      distance: '200%',
      origin: 'bottom',
      opacity: 0,
      duration: 2000,
    };
    let scrollTitle: any = {
      distance: '0%',
      origin: 'bottom',
      opacity: 0,
      duration: 2000,
    };
    gsap.from(`#about-me`, {
      y: '100%',
      opacity: 0,
      duration: 2,
      ease: 'expo',
    });
    gsap.from('#img', { x: 500, opacity: 0, duration: 2, ease: 'expo' });
    ScrollReveal().reveal('.cards', scrollSettings);
    ScrollReveal().reveal('.footer', scrollTitle);
    ScrollReveal().reveal('.title', scrollTitle);
    ScrollReveal().reveal('.title-underline', scrollTitle);
  }
  handleBack = () => {
    window.scrollTo(0, 0);
  };
}
