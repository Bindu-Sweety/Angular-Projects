import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.css']
})
export class ProgressStepsComponent implements OnInit {
  circles = [
    {id : 1},
    {id : 2},
    {id : 3},
    {id : 4},
    {id : 5},
  ]
  currentActive = 0
  
prev(){
  this.currentActive--
}
next(){
  this.currentActive++
}
  constructor() { }

  ngOnInit(): void {
  }

}
