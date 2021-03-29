import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
projects = [
  {
  name:'expanding cards',
  link:'/project 1'
},
  {
  name:'hidden search widget',
  link:'/project 2'
},
  {
  name:'progress steps',
  link:'/project 3'
},
  {
  name:'todo list',
  link:''
},
  {
  name:'burry loading',
  link:''
},
  {
  name:'scroll animation',
  link:''
},
  {
  name:'rotating navigation',
  link:''
},
  { 
  name:'split landing page',
  link:''
},
  {
  name:'form wave animation',
  link:''
},
];
  constructor() { }

  ngOnInit(): void {
  }

}
