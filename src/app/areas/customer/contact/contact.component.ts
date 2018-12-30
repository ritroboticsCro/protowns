import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, animateChild, query } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [trigger('items', [
    transition(':enter', [
      style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
      animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))  // final
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)', opacity: 1, height: '*' }),
      animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
       style({
         transform: 'scale(0.5)', opacity: 0,
         height: '0px', margin: '0px'
       }))
    ])
  ]),
  trigger('list', [
    transition(':enter', [
     query('@items', stagger(300, animateChild()))
      ]),
    ])
  ]
})
export class ContactComponent implements OnInit {

  counter = 5;
  list = [1, 2, 3, 4];

  add() {
    this.list.push(this.counter++);
  }

  remove(index) {
    if (!this.list.length) { return; }
    this.list.splice(index, 1);
  }

  onClick() {
  window.open('https://www.youtube.com/');
}
  constructor( public dialog: MatDialog ) {}

    openDialog() {
      const dialogRef = this.dialog.open(InfoDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit() {
  }

}
