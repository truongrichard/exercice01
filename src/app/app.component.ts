import { Component} from '@angular/core';
import { CalendarView, CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'Second event',
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }
  ]

  eventTimesChanged({ event, newStart, newEnd, }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  /** EXERCICES */
  
  today: Date = new Date();

  addEvent(): void {
    const offSetUTC = new Date().getTimezoneOffset() * 60000;
    // missing code ex02

    this.events = [
      // missing code ex01
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    // missing code ex03
  }
  
}