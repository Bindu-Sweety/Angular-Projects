import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoArray=[];
  item:any;

  addTodo(){
    if(this.item == ''){
     this.todoArray.push();

    } else{
     this.item = '';
    }
  }

    deleteItem(idx:any){
  	
  			this.todoArray.splice(idx,1)
  		}
  	
    
  constructor() { }

  ngOnInit(): void {
  }

}
