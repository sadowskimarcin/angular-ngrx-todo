import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: [],
})
export class LoaderComponent implements OnInit, OnDestroy {
  public count: number = 1;
  private interval: any = null;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.count > 5) {
        this.count = 1;
      } else {
        this.count++;
      }
    }, 250);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
