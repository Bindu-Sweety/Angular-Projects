import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-cards',
  templateUrl: './expanding-cards.component.html',
  styleUrls: ['./expanding-cards.component.css']
})
export class ExpandingCardsComponent implements OnInit {
images = [
  {
    name:'Sea',
    img:'../../assets/expand-cards-img/sea.jpg'
},
  {
    name:'Drink',
    img:'../../assets/expand-cards-img/drink.jpg'
  },
  {
    name:'Roses',
    img:'../../assets/expand-cards-img/roses.jpg'
  },
  {
    name:'Mountains',
    img:'../../assets/expand-cards-img/mountains.jpg'
},
  {
    name:'Sunflower',
    img:'../../assets/expand-cards-img/sunflower.jpg'
},
  {
    name:'Sunset',
    img:'../../assets/expand-cards-img/sunset.jpg'
},
  {
    name:'Windy',
    img:'../../assets/expand-cards-img/windy.jpg'
    },
  {
    name:'Snow',
    img:'../../assets/expand-cards-img/snow.jpg'
},
];
count = 0;

open(i:any){
  this.count = i;
}
  constructor() { }

  ngOnInit(): void {
    
  
  }


}
