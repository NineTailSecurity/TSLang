import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'everythingFrontend';
  displayButton: boolean = false;
  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getData();
  }

  getData() {
    this.http.get<any>('http://localhost:9090/Jobs').subscribe(data => {
      this.data = data;
      this.displayButton = !this.displayButton;
    });
  }
}
