import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-todolist',
 templateUrl: './todolist.component.html',
 styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
    @Input() task;
    newTask: string;
    title = 'My Task Today';
    taskList: string[] = []
    constructor() {}

    addTodo(){
        this.taskList.unshift(this.newTask)
        this.newTask = '';
    }

    removeTask(index: number){
        this.taskList.splice(index, 1)
    }
}
