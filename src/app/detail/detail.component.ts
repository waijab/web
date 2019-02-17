import { Component, OnInit, Input } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() user:user;
  constructor() { }

  ngOnInit() {
  }

}
