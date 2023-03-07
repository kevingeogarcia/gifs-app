import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'k8IftDcPpvRukMKHrZjnspT9P7C33EoK';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  public result: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private htttp: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.result = JSON.parse(localStorage.getItem('result')!) || [];
  }

  searchGifs(query: string) {

    // validamos los espacios en blanco 
    if (query.trim().length === 0)
      return;
    query = query.trim().toLowerCase();
    // validamos los repetidos 
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      // validamos que solo se permita ingresar 10 valores
      this._history = this._history.slice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.htttp.get<SearchGifsResponse>(`${this.apiUrl}/search`, { params:params })
      .subscribe(response => {
        this.result = response.data;
        localStorage.setItem('result', JSON.stringify(this.result));
      });


  }
}
