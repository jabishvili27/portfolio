import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('mouseCircle') mouse!: ElementRef;
  constructor() {
    window.addEventListener('mousemove', (e): void => {
      if (
        window.innerWidth - 20 < e.pageX ||
        window.innerHeight - 20 < e.pageY
      ) {
        this.mouse.nativeElement.style.display = 'none';
      } else {
        this.mouse.nativeElement.style.display = 'block';
      }

      this.mouse.nativeElement.style.top = `${e.pageY}px`;
      this.mouse.nativeElement.style.left = `${e.pageX}px`;
    });
  }
}
