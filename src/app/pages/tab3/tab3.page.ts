import { Component, OnInit } from '@angular/core';
import { ImageHttpService } from 'src/app/services/http/image-http.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  image: string = ""

  constructor(private imageHttpService: ImageHttpService) {}

  ngOnInit(): void {
    this.imageHttpService.getImage().then(resp => {
      this.image = resp.image
    })
  }

}
