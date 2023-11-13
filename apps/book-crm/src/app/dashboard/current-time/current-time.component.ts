import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent {
  currentTime: Date = new Date();

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }
}
