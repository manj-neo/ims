import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  questions = [];

  constructor() { }

  addQuestion(question){
    this.questions.push(question);
  }

  getQuestions(){
    return this.questions;
  }

  
}
