import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-search-widget',
  templateUrl: './hidden-search-widget.component.html',
  styleUrls: ['./hidden-search-widget.component.css']
})
export class HiddenSearchWidgetComponent implements OnInit {
toggle = false

onClick(){
  this.toggle = !this.toggle
}


  constructor() { }

  ngOnInit(): void {

  }

}
