import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddQuestionService  } from '../services/add-question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  columnDefs = [
      {headerName: 'Question', field: 'question', sortable: true },
      {headerName: 'First Option', field: 'firstOption' },
      {headerName: 'Second Option', field: 'secondOption'},
      {headerName: 'Third Option', field: 'thirdOption'},
      {headerName: 'Fourth Option', field: 'fourthOption'},
      {headerName: 'Answer', field: 'answer'}
  ];

  rowData = [
      
  ];

  constructor(private router: Router, private questionService: AddQuestionService) { }

  ngOnInit() {
    this.rowData = this.questionService.getQuestions();
  }

  onAddQuestionClick(){
    console.log("onAddQuestionClick");

    this.router.navigate(['addquestion']);
  }

  onSubmitClick(){
    console.log("onSubmitClick");
  }

}
