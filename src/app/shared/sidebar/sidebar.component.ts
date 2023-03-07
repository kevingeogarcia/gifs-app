import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  getHistory() {
    return this.gifsService.history;
  }

  search(query: string) {
    this.gifsService.searchGifs(query);
  }

}
