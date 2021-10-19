import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLshortenerService } from '../urlshortener.service';

@Component({
  selector: 'app-trim-url',
  templateUrl: './trim-url.component.html',
  styleUrls: ['./trim-url.component.css']
})
export class TrimURLComponent implements OnInit {

  @Input() longUrl: string = "";
  shortUrl: string = "";
  code: string = "";
  urldata = {
    "longurl": "",
    "shorturl": "",
    "code": "",
    "clicks": 0
  };
  constructor(private urlService: URLshortenerService, private router: Router) { }

  ngOnInit(): void {
  }

  generateCode() {
    var characters = "ABCDEFGHIJKLMNabcdefghijklmn123456";
    var charactersLength = characters.length;

    for (var i = 0; i < 4; i++) {
      this.code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.shortUrl = "https://localhost:4200/" + this.code;
    this.urldata = {
      "longurl": this.longUrl,
      "shorturl": this.shortUrl,
      "code": this.code,
      "clicks": 0
    };
    console.log(this.urldata);
    this.urlService.saveUrl(this.urldata).subscribe(() => {
      alert("mini url generated!")
      // location.reload();
    });

  }


}
