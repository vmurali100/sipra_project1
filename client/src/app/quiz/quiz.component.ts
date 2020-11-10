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
    question: 'Which of the following is not a Java features?',
    answers: ['Dynamic', 'Architecture Neutral', 'Use of pointers ', 'Object-oriented'],
  },
  {
    question: 'In which process, a local variable has the same name as one of the instance variables?',
    answers: ['Serialization', 'Variable Shadowing', ' Abstraction ', 'Multi-threading'],
  },
  {
    question:'The \u0021 article referred to as a.',
    answers: ['Unicode escape sequence', 'Octal escape', 'Hexadecimal ', 'Line feed'],
  },
  {
    question:"What is the return type of the hashCode() method in the Object class?",
    answers: ['Object', 'int', 'long ', 'void'],
  },
  {
    question:
      "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code'?",
    answers: ['javap tool', 'javaw command', 'Javadoc tool ', 'javah command'],
  },
  {
    question:
      ' In which process, a local variable has the same name as one of the instance variables?',
    answers: ['Serialization', 'Variable Shadowing', 'Abstraction ', 'Multi-threading'],
  },
  {
    question: 'Which of the following is an immediate subclass of the Panel class?',
    answers: ['Applet class', 'Window class', 'Frame class ', 'Dialog class'],
  },
  {
    question: 'Which of the following is a reserved keyword in Java?',
    answers: ['object', 'strictfp', 'main ', 'system'],
  },
];
