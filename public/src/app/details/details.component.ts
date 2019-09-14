import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()selected_cake :any;
  @Input()selected_rate :any;
  constructor() { }

  ngOnInit() {
    // console.log("selected_cake.number", this.selected_cake.reviews[0].number)
  }

}
