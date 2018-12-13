import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  onClick() {
  window.open('https://www.youtube.com/');
}
  constructor() { }

  ngOnInit() {
  }

}
