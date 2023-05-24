import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { interval, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  val: number = 0;
  curSec: number = 0;

  // Progress Bar
  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.val = 0 + (sec * 100) / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }

      if (this.val == 100) {
        setTimeout(() => {
          this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
        }, 500);
      }
    });
  }
  ngOnInit(): void {
    this.startTimer(2);

  }
}



