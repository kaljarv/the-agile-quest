import { Component, 
         Input, 
         OnDestroy } from '@angular/core';
import { Subject,
         timer } from 'rxjs';
import { endWith,
         mapTo,
         switchMap, 
         startWith, 
         scan, 
         takeWhile, 
         takeUntil } from 'rxjs/operators';

/*
 * Modified from the original by Brain Troncone
 * https://www.learnrxjs.io/learn-rxjs/recipes/smartcounter
 */

@Component({
  selector: 'app-number-tracker',
  template: `
    <ng-container *ngIf="isCurrency">
      {{ currentNumber | currency:null:'symbol':'1.0' }}
    </ng-container>
    <ng-container *ngIf="!isCurrency">
      {{ currentNumber }}
    </ng-container>
  `
})
export class NumberTrackerComponent implements OnDestroy {
  @Input()
  set end(endRange: number) {
    this._counterSub$.next(endRange);
  }
  @Input() timeInterval = 20;
  @Input() stepSize = 101;
  @Input() isCurrency = true;
  public currentNumber = 0;
  private _counterSub$ = new Subject();
  private _onDestroy$ = new Subject();

  constructor() {
    this._counterSub$
      .pipe(
        switchMap(endRange => {
          return timer(0, this.timeInterval).pipe(
            mapTo(this.positiveOrNegative(endRange, this.currentNumber)),
            startWith(this.currentNumber),
            scan((acc: number, curr: number) => acc + curr),
            takeWhile(this.isApproachingRange(endRange, this.currentNumber)),
            endWith(endRange)
          )
        }),
        takeUntil(this._onDestroy$)
      )
      .subscribe((val: number) => this.currentNumber = val);
  }

  private positiveOrNegative(endRange, currentNumber) {
    return (endRange > currentNumber ? 1 : -1) * this.stepSize;
  }

  private isApproachingRange(endRange, currentNumber) {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}