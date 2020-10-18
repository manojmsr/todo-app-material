import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {
  constructor() { }

}
export const todos = [
    {
      todoid: 1,
      tododate: "11th November",
      title: "Wake Up",
      tododesc: "Wake up before sunrise!"
    },
    {
      todoid: 2,
      tododate: "11th November",
      title: "Brush",
      tododesc: "Brush your teeth!"
    },
    {
      todoid: 3,
      tododate: "11th November",
      title: "Get ready",
      tododesc: "You have you interview at 10 AM!"
    }
];