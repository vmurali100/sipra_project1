import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
  answertype: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quizDetails: any = [];
  currQuestion: QuizQuestion;
  currentQuestion;
  currentAnswers = [];
  qIndex = 0;
  score = 0;
  isQuizCompleted = false;
  multipleAnswers = [];
  constructor() {}

  ngOnInit(): void {
    this.quizDetails = quizQuestions;
    this.currQuestion = this.quizDetails[this.qIndex];
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
  }

  onChange(ans, val) {
    console.log(ans);
    if (this.multipleAnswers.indexOf(val) == -1) {
      this.multipleAnswers.push(ans);
    } else {
      this.multipleAnswers = this.multipleAnswers.filter((ans) => ans !== val);
    }
  }
  submitAnswer(quizForm: NgForm) {
    console.log(quizForm.value);
    console.log(this.quizDetails[this.qIndex]);
    if (this.quizDetails[this.qIndex].answertype == 'single') {
      this.checkCorrectAnswer(this.qIndex, quizForm.value.answer);
    } else if (this.quizDetails[this.qIndex].answertype == 'multiple') {
      this.checkMultipleAnsers();
    }
    this.qIndex = this.qIndex + 1;
    if (this.qIndex < this.quizDetails.length) {
      this.currQuestion = this.quizDetails[this.qIndex];
      this.currentQuestion = this.quizDetails[this.qIndex].question;
      this.currentAnswers = this.quizDetails[this.qIndex].answers;
    } else {
      this.isQuizCompleted = true;
    }
  }

  // logic to handle Multiple Ans

  checkMultipleAnsers() {
    let check = false;
    this.multipleAnswers.forEach((answer) => {
      if (this.quizDetails[this.qIndex].correctAnswer == answer) {
        check = true;
      }
    });
    if (check) {
      this.score++;
    }
  }

  // Logic to handle Drag and Drop

  // logic to handle radio button

  checkCorrectAnswer(i, ans) {
    console.log(i, ans);
    if (ans == this.quizDetails[i].correctAnswer) {
      this.score++;
    }
    if (this.qIndex == this.quizDetails.lenth) {
      console.log('Quiz Completed');
    }
  }
}

const quizQuestions = [
  {
    question: 'Which of the following is not JavaScript Data Types?',
    answers: ['Undefined', 'Number', 'Boolen', 'Float'],
    correctAnswer: 'Undefined',
    answertype: 'single',
  },
  {
    question: 'Which company developed JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
    correctAnswer: 'Bell Labs',
    answertype: 'multiple',
  },
  {
    question: 'Which of the following is not a Java features?',
    answers: [
      'Dynamic',
      'Architecture Neutral',
      'Use of pointers ',
      'Object-oriented',
    ],
    correctAnswer: 'Use of pointers',
    answertype: 'multiple',
  },
  {
    question:
      'In which process, a local variable has the same name as one of the instance variables?',
    answers: [
      'Serialization',
      'Variable Shadowing',
      ' Abstraction ',
      'Multi-threading',
    ],
    correctAnswer: 'Multi-threading',
    answertype: 'multiple',
  },
  {
    question: 'The \u0021 article referred to as a.',
    answers: [
      'Unicode escape sequence',
      'Octal escape',
      'Hexadecimal ',
      'Line feed',
    ],
    correctAnswer: 'Unicode escape sequence',
    answertype: 'multiple',
  },
  {
    question:
      'What is the return type of the hashCode() method in the Object class?',
    answers: ['Object', 'int', 'long ', 'void'],
    correctAnswer: 'int',
    answertype: 'multiple',
  },
  {
    question:
      "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code'?",
    answers: ['javap tool', 'javaw command', 'Javadoc tool ', 'javah command'],
    correctAnswer: 'javaw command',
    answertype: 'multiple',
  },
  {
    question:
      ' In which process, a local variable has the same name as one of the instance variables?',
    answers: [
      'Serialization',
      'Variable Shadowing',
      'Abstraction ',
      'Multi-threading',
    ],
    correctAnswer: 'Multi-threading',
    answertype: 'multiple',
  },
  {
    question:
      'Which of the following is an immediate subclass of the Panel class?',
    answers: ['Applet class', 'Window class', 'Frame class ', 'Dialog class'],
    correctAnswer: 'Applet class',
    answertype: 'multiple',
  },
  {
    question: 'Which of the following is a reserved keyword in Java?',
    answers: ['object', 'strictfp', 'main ', 'system'],
    correctAnswer: 'main',
    answertype: 'multiple',
  },
  {
    question: 'Boolean Question?',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    answertype: 'single',
  },
];
