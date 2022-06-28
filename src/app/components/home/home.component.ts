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
  ngAfterViewInit(): void {
    this.animations();
    let c: any = document.querySelector('.particles-js-canvas-el');
    c.style.cssText = `position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:1;`;
  }
  animations(): void {
    this.tl.from(`#social`, { x: 200, duration: 0.9 });
    gsap.from(`#header`, { y: '-100%', duration: 0.9 });
    gsap.from(`#name`, { y: '200%', duration: 2, ease: 'power1' });
    gsap.from(`#salutation`, { y: '200%', duration: 2, ease: 'power1' });
    gsap.from(`#sub`, { y: '200%', duration: 2.5, ease: 'slow' });
    let time: number = 0;
    for (let i = 1; i <= 3; i++) {
      this.tl.from(`#icon-${i}`, { x: 50, duration: 0.2 + time, ease: 'back' });
      time += 0.1;
    }
    particlesJS('home', {
      particles: {
        number: {
          value: 380,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 20,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'top',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
  ngOnInit(): void {}
}
