import { Component,ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-single-project-swiper',
  templateUrl: './single-project-swiper.component.html',
  styleUrl: './single-project-swiper.component.scss'
})
export class SingleProjectSwiperComponent {
  @ViewChild('carousel', { static: false }) carousel!: NzCarouselComponent;

  images = [
    'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4ypkRUAgFpsL86ogbwqGGcyTIurlmN36dODQ2wFA1XM5-9ZvqoIZ5DqcSICPDKB88dD9JpQyGTm-e1uR2vrPXI3RSJcirHbBy~qwUiUDj47ETYKpZwZYABY7clpj9JwtQp~ywZy3D0qxH0fY1cHYk0xQqcaVjPvVUNrsQS7RuVsgwdA1Wrl50Fi9o7oefG38GwSwIjLXrnLCrSlTBYKr8~pr3nGIHvioEGt5HJqLbuAw1ePuuQkRtmPzhi58f2w1Mr-Xc~NEfUWLYwcBjwou4WvQXmyDCJsRH04iPwUV1S1yMfLSFhZ55cVU~Zh5JZH8kRueZK4r7knLSLrjN7BbQ__',
    'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4ypkRUAgFpsL86ogbwqGGcyTIurlmN36dODQ2wFA1XM5-9ZvqoIZ5DqcSICPDKB88dD9JpQyGTm-e1uR2vrPXI3RSJcirHbBy~qwUiUDj47ETYKpZwZYABY7clpj9JwtQp~ywZy3D0qxH0fY1cHYk0xQqcaVjPvVUNrsQS7RuVsgwdA1Wrl50Fi9o7oefG38GwSwIjLXrnLCrSlTBYKr8~pr3nGIHvioEGt5HJqLbuAw1ePuuQkRtmPzhi58f2w1Mr-Xc~NEfUWLYwcBjwou4WvQXmyDCJsRH04iPwUV1S1yMfLSFhZ55cVU~Zh5JZH8kRueZK4r7knLSLrjN7BbQ__',
    'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4ypkRUAgFpsL86ogbwqGGcyTIurlmN36dODQ2wFA1XM5-9ZvqoIZ5DqcSICPDKB88dD9JpQyGTm-e1uR2vrPXI3RSJcirHbBy~qwUiUDj47ETYKpZwZYABY7clpj9JwtQp~ywZy3D0qxH0fY1cHYk0xQqcaVjPvVUNrsQS7RuVsgwdA1Wrl50Fi9o7oefG38GwSwIjLXrnLCrSlTBYKr8~pr3nGIHvioEGt5HJqLbuAw1ePuuQkRtmPzhi58f2w1Mr-Xc~NEfUWLYwcBjwou4WvQXmyDCJsRH04iPwUV1S1yMfLSFhZ55cVU~Zh5JZH8kRueZK4r7knLSLrjN7BbQ__',
    'https://s3-alpha-sig.figma.com/img/335c/e3b9/577a0f1eb887469394ff66c964e11723?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4ypkRUAgFpsL86ogbwqGGcyTIurlmN36dODQ2wFA1XM5-9ZvqoIZ5DqcSICPDKB88dD9JpQyGTm-e1uR2vrPXI3RSJcirHbBy~qwUiUDj47ETYKpZwZYABY7clpj9JwtQp~ywZy3D0qxH0fY1cHYk0xQqcaVjPvVUNrsQS7RuVsgwdA1Wrl50Fi9o7oefG38GwSwIjLXrnLCrSlTBYKr8~pr3nGIHvioEGt5HJqLbuAw1ePuuQkRtmPzhi58f2w1Mr-Xc~NEfUWLYwcBjwou4WvQXmyDCJsRH04iPwUV1S1yMfLSFhZ55cVU~Zh5JZH8kRueZK4r7knLSLrjN7BbQ__'
  ];

  goToNext(): void {
    this.carousel.next();
  }

  goToPrevious(): void {
    this.carousel.pre();
  }
}
