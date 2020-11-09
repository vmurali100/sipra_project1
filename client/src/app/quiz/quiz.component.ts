import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizDetails: any = [];
  currentQuestion;
  currentAnswers = [];
  qIndex = 0;
  constructor() {}

  ngOnInit(): void {
    this.quizDetails = quizQuestions;
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
  }

  submitAnswer(ans) {
    this.qIndex++;
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
  }
}

const quizQuestions = [
  {
    question: 'Which of the following is not JavaScript Data Types?',
    answers: ['Undefined', 'Number', 'Boolen', 'Float'],
  },
  {
    question: 'Which company developed JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question: ' Inside which HTML element do we put the JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question: 'Which of the following is correct about features of JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question:
      'Choose the correct JavaScript syntax to change the content of the following HTML code.',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question:
      "Which of the following is the correct syntax to display 'Letsfindcourse' in an alert box using JavaScript?",
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'LFC.js'?",
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question:
      'Which of the following is not Javascript frameworks or libraries?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question: 'Why so JavaScript and Java have similar name?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
  {
    question: 'What is the original name of JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
  },
];
