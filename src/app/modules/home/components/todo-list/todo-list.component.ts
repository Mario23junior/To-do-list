import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public takslist: Array<TaskList> = []

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number) {
    this.takslist.splice(event, 1)
  }

  public setEmitTaskList(event: string) {
    console.log(event)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Voĉ deseja realmente deletar todos os item ?")
    if (confirm) {
      this.takslist = []
    }
  }
}
