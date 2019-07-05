import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../interfaces/question';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public questions: Question[] = [];
  public activeQuestion: Question;
  public previousSelectedQuestion: number ;


  ngOnInit() {

    this.questions = [
      {
        question: 'question 1',
        background: '#000'
      },
      {
        question: 'question 2',
        background: '#fff'
      },
      {
        question: 'question 3',
        background: '#cecece'
      },
      {
        question: 'question 4',
        background: '#ared'
      },
      {
        question: 'question 5',
        background: '#3920'
      }
    ];

    this.setQuestionActive();

  }

  setQuestionActive() {
    let selectedQuestion = Math.floor(Math.random() * this.questions.length);
    while (selectedQuestion == this.previousSelectedQuestion) {
      selectedQuestion = Math.floor(Math.random() * this.questions.length);
    }
    this.previousSelectedQuestion = selectedQuestion;

    this.activeQuestion = this.questions[selectedQuestion];

    this.domCtrl.write(() => {

      document.documentElement.style.setProperty('--ion-background-color', this.activeQuestion.background);
    });


  }

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {

  }

}
