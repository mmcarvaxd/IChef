import { Component, OnInit } from '@angular/core';
import { Breweries } from 'src/app/classes/Breweries';
import { BreweriesHttpService } from 'src/app/services/http/breweries-http.service';
import { ImageHttpService } from 'src/app/services/http/image-http.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'buy-drinks.page.html',
  styleUrls: ['buy-drinks.page.scss']
})
export class Tab3Page implements OnInit {
  breweries: [Breweries]

  constructor(private breweriesHttpService: BreweriesHttpService) {}

  ngOnInit(): void {
    this.breweriesHttpService.getBreweries("").then(resp => {
      this.breweries = resp
    })
  }

  searchChanged(event) {
    if(event.detail.value) {
      
      return this.breweriesHttpService.getBreweries(event.detail.value).then(resp => {
        this.breweries = resp
      })
    }

    return this.breweriesHttpService.getBreweries("").then(resp => {
      this.breweries = resp
    })
  }
  
  openSite(url: string) {
    window.open(url, '_blank')
  }
}
