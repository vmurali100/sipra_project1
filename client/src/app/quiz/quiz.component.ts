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
  score = 0;
  isQuizCompleted = false
  constructor() {}

  ngOnInit(): void {
    this.quizDetails = quizQuestions;
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
  }

  submitAnswer(ans) {
    this.checkCorrectAnswer(this.qIndex,ans)
    this.qIndex++;
    if(this.qIndex < this.quizDetails.length){
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
    }else{
      console.log("Quiz Completed")
      this.isQuizCompleted = true;
    }
  }
  checkCorrectAnswer(i,ans){
    console.log(i,ans)
    if(ans == this.quizDetails[i].correctAnswer){
      this.score ++
    }
    if(this.qIndex == this.quizDetails.lenth){
      console.log("Quiz Completed")
    }
  }
}

const quizQuestions = [
  {
    question: 'Which of the following is not JavaScript Data Types?',
    answers: ['Undefined', 'Number', 'Boolen', 'Float'],
    correctAnswer:"Undefined"
  },
  {
    question: 'Which company developed JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
    correctAnswer:"Bell Labs"

  },
  {
    question: 'Which of the following is not a Java features?',
    answers: ['Dynamic', 'Architecture Neutral', 'Use of pointers ', 'Object-oriented'],
    correctAnswer:"Use of pointers"

  },
  {
    question: 'In which process, a local variable has the same name as one of the instance variables?',
    answers: ['Serialization', 'Variable Shadowing', ' Abstraction ', 'Multi-threading'],
    correctAnswer:"Multi-threading"

  },
  {
    question:'The \u0021 article referred to as a.',
    answers: ['Unicode escape sequence', 'Octal escape', 'Hexadecimal ', 'Line feed'],
    correctAnswer:"Unicode escape sequence"

  },
  {
    question:"What is the return type of the hashCode() method in the Object class?",
    answers: ['Object', 'int', 'long ', 'void'],
    correctAnswer:"int"

  },
  {
    question:
      "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code'?",
    answers: ['javap tool', 'javaw command', 'Javadoc tool ', 'javah command'],
    correctAnswer:"javaw command"

  },
  {
    question:
      ' In which process, a local variable has the same name as one of the instance variables?',
    answers: ['Serialization', 'Variable Shadowing', 'Abstraction ', 'Multi-threading'],
    correctAnswer:"Multi-threading"

  },
  {
    question: 'Which of the following is an immediate subclass of the Panel class?',
    answers: ['Applet class', 'Window class', 'Frame class ', 'Dialog class'],
    correctAnswer:"Applet class"

  },
  {
    question: 'Which of the following is a reserved keyword in Java?',
    answers: ['object', 'strictfp', 'main ', 'system'],
    correctAnswer:"main"
  },
];
