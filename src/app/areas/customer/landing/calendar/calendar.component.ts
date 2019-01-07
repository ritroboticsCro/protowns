import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor() { }

  ngOnInit() {
  //   this.calendarOptions = {
  //     editable: true,
  //     eventLimit: false,
  //     header: {
  //       left: 'prev,next today',
  //       center: 'title',
  //       right: 'month,agendaWeek,agendaDay,listMonth'
  //     },
  //     events: data
  //   };
   }
  }
