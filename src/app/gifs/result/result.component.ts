import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent {

  get result() {

    return this.gifsService.result;
  }
  constructor(private gifsService: GifsService) { }

  validateSize() {
    return (this.gifsService.result.length !== 0); 
  }
}
