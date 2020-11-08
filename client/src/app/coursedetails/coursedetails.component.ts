import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
})
export class CoursedetailsComponent implements OnInit {
  coursedetails;
  startQuiz;
  quizDetails :any = [];
  currentQuestion ;
  currentAnswers=[]
  qIndex=0;
  python = null;
  javascript = null;
  DataScience = null;
  machineLearning = null;
  pythonMegaCouse = null;
  pythonPrograming = null;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizDetails = quizQuestions;
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
    this.activatedRoute.params.subscribe((res) => {
      this.coursedetails = res['course'];
      if (this.coursedetails == 'python') {
        this.python = true;
      } else if (this.coursedetails == 'DataScience') {
        this.DataScience = true;
      } else if (this.coursedetails == 'javascript') {
        this.javascript = true;
      } else if (this.coursedetails == 'pythonMegaCouse') {
        this.pythonMegaCouse = true;
      } else if (this.coursedetails == 'pythonPrograming') {
        this.pythonPrograming = true;
      } else if (this.coursedetails == 'machineLearning') {
        this.machineLearning = true;
      }
    });
    
  }
  startQuizEvent(){
    this.startQuiz = true
  }   
  
  submitAnswer(ans){
    this.qIndex++;
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
  }
}

const quizQuestions = [
  {question:"Which of the following is not JavaScript Data Types?",
  answers:["Undefined","Number","Boolen","Float"]},
  {question:"Which company developed JavaScript?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:" Inside which HTML element do we put the JavaScript?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"Which of the following is correct about features of JavaScript?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"Choose the correct JavaScript syntax to change the content of the following HTML code.",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"Which of the following is the correct syntax to display 'Letsfindcourse' in an alert box using JavaScript?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"What is the correct syntax for referring to an external script called 'LFC.js'?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"Which of the following is not Javascript frameworks or libraries?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"Why so JavaScript and Java have similar name?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},
  {question:"What is the original name of JavaScript?",
  answers:["Netscape","Bell Labs","Sun Microsystems ","IBM"]},

]