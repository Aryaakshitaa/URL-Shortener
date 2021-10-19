import { Component, OnInit } from '@angular/core';
import { Url } from '../model';
import { URLshortenerService } from '../urlshortener.service';

@Component({
  selector: 'app-list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.css']
})
export class ListURLComponent implements OnInit {

  urlList: Array<Url> = [];
  temp1 = {
    "longurl": "",
    "shorturl": "",
    "code": "",
    "clicks": 0
  }

  constructor(private urlService: URLshortenerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.urlService.getAll().subscribe((data) => {
      this.urlList = data;
      console.log(this.urlList);
    })
  }

  changeCount(id: number | undefined) {
    this.urlService.getAll().subscribe((data) => {
      data.forEach((temp) => {
        if (temp.id === id) {
          this.temp1 = {
            "longurl": temp.longurl,
            "shorturl": temp.shorturl,
            "code": temp.code,
            "clicks": temp.clicks + 1
          }
          console.log(this.temp1.clicks);
          this.urlService.update(this.temp1, id).subscribe((data) => {
            this.ngOnInit();
            console.log(data);
          });
        }
      })
    })
  }

}
