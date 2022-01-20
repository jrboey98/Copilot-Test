import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //uninitialized array of Tasks
  tasks: Task[] = [];

  //form group containing form controls for task name, description, due date datetime, and priority
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskDescription: new FormControl(''),
    taskDueDate: new FormControl(new Date()),
    taskPriority: new FormControl('')
  });

  //submit taskForm and add task to tasks array
  onSubmit() {
    //if taskForm has null values, do not add task to tasks array
    if (this.taskForm.value.taskName == null || this.taskForm.value.taskDescription == null || this.taskForm.value.taskDueDate == null || this.taskForm.value.taskPriority == null) {
      alert("Please fill out all fields");
    }
    //else if taskDueDate is in the past, do not add task to tasks array
    else if (this.convertToDate(this.taskForm.value.taskDueDate) <= new Date()) {
      alert("Please enter a valid date");
    }
    else {
      //add task to tasks array
      this.tasks.push(this.taskForm.value);
      this.orderTasks();
      this.taskForm.reset();
    }
  }

  //convert string to date
  convertToDate(date: string): Date {
    return new Date(date);
  }

  //delete task from tasks array
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  //function to order tasks in array by due date, but if priority is set to high, move to front of array
  orderTasks() {
    this.tasks.sort((a, b) => {
      if (a.taskDueDate < b.taskDueDate) {
        return -1;
      }
      if (a.taskDueDate > b.taskDueDate) {
        return 1;
      }
      return 0;
    });
  }
}

//interface for taskForm
export interface Task {
  taskName: string;
  taskDescription: string;
  taskDueDate: string;
  taskPriority: string;
}
