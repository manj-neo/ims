import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AddQuestionService } from '../services/add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestionForm: FormGroup;

  constructor(private router: Router, private questionService: AddQuestionService, private toastr: ToastrService) { }

  ngOnInit() {
    this.addQuestionForm = new FormGroup({
      'question': new FormControl(null, Validators.required),
      'firstOption': new FormControl(null, Validators.required),
      'secondOption': new FormControl(null, Validators.required),
      'thirdOption': new FormControl(null, Validators.required),
      'fourthOption': new FormControl(null, Validators.required)
    });    
  }

  onSubmit(){
    console.log("onSubmit");
  }

  onAddQuestionClick(){
    console.log("onAddQuestionClick");
    this.questionService.addQuestion(this.addQuestionForm.value);

    this.toastr.success("Question saved as draft, Click View Question to see all added question");
    
    this.addQuestionForm.reset();
  }

  onViewQuestionsClick(){
    console.log("onViewQuestionsClick");

    this.router.navigate(['viewquestions']);
  }
}
