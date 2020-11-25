import { Todo } from 'src/app/store/models/todo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  /**
   * The todo object containing its metadata
   *
   * @type {Todo}
   */
  @Input('metadata') todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }
}
