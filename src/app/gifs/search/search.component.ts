import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {


  constructor(private gifsService: GifsService){

  }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  printAndCleanTxt(){
   const valueTxt = this.txtBuscar.nativeElement.value;
    this.gifsService.searchGifs(valueTxt);
    this.txtBuscar.nativeElement.value = '';
  }

}
