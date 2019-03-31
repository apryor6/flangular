import { Component, OnInit } from '@angular/core';
import { FlaskService } from './flask.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flangular';
  message: Observable<string>;

  constructor(private flaskService: FlaskService) {}
  ngOnInit() {
    this.message = this.flaskService.getMessage();
  }
}
