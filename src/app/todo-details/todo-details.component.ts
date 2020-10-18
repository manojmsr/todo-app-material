import { Component, OnInit } from '@angular/core';
import { todos } from '../todo-data.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todos=todos;
  constructor() { }

  ngOnInit() {
  }

}