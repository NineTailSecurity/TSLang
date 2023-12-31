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
  specificData: any = [];
  undeletedData: any = [];
  updatedData: any = [];
  inputId: number =  0;
  dummyData: string = '';
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

  insertData() {
    // Not Implemeted
  }

  updateData(id: number, dummyData: string) {
    this.http.patch<any>('http://localhost:9090/modifyJob/' + id, dummyData).subscribe(data => {
      this.updatedData = data;
      console.log(this.updatedData);
    });
  }

  deleteData(id: number) {
    this.http.delete<any>('http://localhost:9090/deleteJob/' + id).subscribe(data => {
      this.undeletedData = data;
      console.log(this.undeletedData);
    });
  }

  getSpecificData(id: number) {
    this.http.get<any>('http://localhost:9090/Job/' + id).subscribe(data => {
      this.specificData = data;
      console.log(this.specificData);
    });
  }
}
