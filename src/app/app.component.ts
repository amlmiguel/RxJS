import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxJS';

  ngOnInit(): void {
    // of(2,4,6,8).subscribe(item => console.log(item));

    from([20, 15, 10, 5]).pipe(
      tap(item => console.log(`emitted item... ${item}`)),
      map(item => item * 2),
      map(item => item - 10),
      map(item => {
        if (item === 0) {
          throw new Error('zero detected');
        }
        return item;
      }),
      take(3)
    ).subscribe({
      next: item => console.log(`resulting item... ${item}`),
      error: err => console.error(`resulting item... ${err}`),
      complete: () => console.log('complete')
    });

    // of(['apple', 'banana', 'mango', 'pineapple']).subscribe({
    //   next: item => console.log(`resulting item... ${item}`),
    //   error: err => console.error(`resulting item... ${err}`),
    //   complete: () => console.log('No more fruits')
    // })
  }
}

/* Observable:
-Collection of events or values emitted over time
*/

/* Observer:
-Observers notifications from the Observable
-Methods to process notifications: .next(), .erro(), .complet()
*/

/* Subscriber:
-An Observer that can unsubscribe
*/

/* Subscription:
-Tells the Observable that the subscriber is ready for notifications
*/
