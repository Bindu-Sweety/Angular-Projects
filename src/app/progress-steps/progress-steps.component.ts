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
  ];
  dynamicLine = 0
  currentActive = 0
  
prev(){
  if(this.currentActive >=0){
  this.currentActive--
  this.dynamicLine = (this.currentActive) / (this.circles.length - 1) * 100;
  }
}
next(){
  this.currentActive++
  this.dynamicLine = (this.currentActive) / (this.circles.length - 1) * 100;

}
  constructor() { }

  ngOnInit(): void {
  }

}
