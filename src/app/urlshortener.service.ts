import { Injectable } from '@angular/core';
import { Url } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class URLshortenerService {
  urldata: Array<Url> = [];

  constructor(private http: HttpClient) { }

  saveUrl(data: Url) {
    return this.http.post(`https://615f082eaf36590017204775.mockapi.io/url-shortener`, data);
  }

  getAll() {
    return this.http.get<Array<Url>>(`https://615f082eaf36590017204775.mockapi.io/url-shortener`);
  }

  update(data: Url, id: number | undefined) {
    return this.http.put(`https://615f082eaf36590017204775.mockapi.io/url-shortener/${id}`, data);
  }
}
