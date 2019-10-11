// CODE here for your Lambda Classes

class Person {
   constructor(props) {
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
   }
   speak() {
      console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
   }
}


//__________________________________________________________________//





class Instructor extends Person {
   constructor(props) {
      super(props);
      this.specialty = props.specialty;
      this.favLanguage = props. favLanguage;
      this.catchPhrase = props.catchPhrase;
   }
   demo(subject) {
      console.log(`Today we are learning about ${subject}.`);
   }
   grade(student, subject) {
      console.log(`${student} receives a perfect score on ${subject}.`);
   }
}


const fred = new Instructor({
   name: 'Fred',
   location: 'Bedrock',
   age: 37,
   favLanguage: 'JavaScript',
   specialty: 'Front-end',
   catchPhrase: `Don't forget the homies`
 });

fred.speak();
fred.demo('JavaScript IV');
fred.grade('Jimmy', 'HTML');


const pace = new Instructor({
   name: 'Pace',
   location: 'Silicone Slopes',
   age: 21,
   favLanguage: 'English',
   specialty: 'Web Fundamentals',
   catchPhrase: `Follow the 20 minute rule`
 });

 pace.speak();
 pace.demo('Preprocessors');
 pace.grade('Adrian', 'LESS');



 //____________________________________________________________//




class Student extends Person {
   constructor(props) {
      super(props);
      this.previousBackground = props.previousBackground;
      this.className = props.className;
      this.favSubjects = props.favSubjects;
   }
   listSubjects() {
      console.log(this.favSubjects);
   }
   PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}.`);
   }
   sprintChallenge(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}.`)
   }
}

const adrian = new Student({
   name: 'Adian',
   location: 'Buffalo',
   age: 34,
   previousBackground: 'Philosophy',
   className: 'WebPt11',
   favSubjects: 'Composition'
 });

 adrian.speak();
 adrian.PRAssignment('JS4');
 adrian.sprintChallenge('Javascript Fundamentals');

 const jesus = new Student({
   name: 'Jesus',
   location: 'Miami',
   age: 25,
   previousBackground: 'Audio Engineer',
   className: 'WebPt11',
   favSubjects: 'JS'
 });

 jesus.speak();
 jesus.PRAssignment('Preprocessors II');
 jesus.sprintChallenge('Node.JS');




 //______________________________________________________//





class ProjectManagers extends Instructor {
   constructor(props) {
      super(props);
      this.gradClassName = props.gradClassName;
      this.favInstructor = props.favInstructor;
   }
   standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standUP times!`);
   }
   debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student}'s code on ${subject}.`);
   }
}

const dustin = new ProjectManagers ({
   name: 'Dustin',
   location: 'Heaven',
   age: 30,
   favLanguage: 'SASS',
   specialty: 'Lambda Gangsta',
   catchPhrase: `Any questions?`,
   gradClassName: 'WebPT11',
   favInstructor: 'Pace'
 });

 dustin.speak();
 dustin.demo('Gangstaness');
 dustin.grade('Adrian', 'Gangstaness');
 dustin.standUp('WebPT11_Dustin');
 dustin.debugsCode('Jesus', 'Gangstaness');

 const ira = new ProjectManagers ({
   name: 'Ira',
   location: 'Slack',
   age: 27,
   favLanguage: 'Hope',
   specialty: 'Code',
   catchPhrase: `Be better than you are.`,
   gradClassName: 'WebPT11',
   favInstructor: 'Pace'
 });

 ira.speak();
 ira.demo('Coding');
 ira.grade('Adrian', 'Coding');
 ira.standUp('WebPT11_Help');
 ira.debugsCode('Jesus', 'Coding');



 
 //______________________________________________________________________