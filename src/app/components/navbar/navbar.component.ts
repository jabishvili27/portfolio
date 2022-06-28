import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navLinks: any[] = [
    {
      icon: 'fas fa-user',
      id: 'About',
    },
    {
      icon: 'fas fa-tasks-alt',
      id: 'Skills',
    },
    {
      icon: 'fas fa-clipboard-list-check',
      id: 'Projects',
    },
    {
      icon: 'fas fa-phone',
      id: 'Contact',
    },
  ];
  @ViewChild('open') open!: ElementRef;
  @ViewChild('close') close!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  openNav = () => {
    this.nav.nativeElement.classList.add('active');
  };
  closeNav = () => {
    this.nav.nativeElement.classList.remove('active');
  };
}
