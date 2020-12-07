import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from 'jquery';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource ,NgbCarouselConfig   } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  images =  ["../../assets/images/slidimg1.jpg", "../../../assets/images/slidimg2.jpg", "../../../assets/images/slidimg3.jpg"];
  
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  constructor(ngbconfig : NgbCarouselConfig) 
  { 
    ngbconfig.interval = 2000;  
    ngbconfig.wrap = true;  
    ngbconfig.keyboard = true;  
  }

  ngOnInit(): void {
  }

}
