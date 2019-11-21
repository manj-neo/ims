import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestionForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addQuestionForm = new FormGroup({
      'question': new FormControl(null, Validators.required),
      'firstOption': new FormControl(null, Validators.required),
      'secondOption': new FormControl(null, Validators.required),
      'thirdOption': new FormControl(null, Validators.required),
      'fourthOption': new FormControl(null, Validators.required)
    });    
  }

}
