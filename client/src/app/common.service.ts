import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  courses = [
    {
      courseName: 'DataScience',
      courseImage: 'DataScience.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'machineLearning',
      courseImage: 'machineLearning.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'python',
      courseImage: 'python.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'pythonMegaCouse',
      courseImage: 'pythonMegaCouse.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'pythonPrograming',
      courseImage: 'pythonPrograming.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'javascript',
      courseImage: 'javascript.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
  ];
  constructor() {}

  getCourseDetails() {
    return this.courses;
  }
}
