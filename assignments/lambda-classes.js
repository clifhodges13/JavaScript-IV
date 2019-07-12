// CODE here for your Lambda Classes


//PERSON 'base-class'
class Person {
  constructor(props) {
    this.name = props.name,
    this.lastName = props.lastName,
    this.age = props.age,
    this.location = props.location
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
  }

  tallyScore() {
    console.log(`Initial Score: ${this.grade}`);
    let adder = Math.floor(Math.random() * 20); //store number between 0-20 in a variable called "adder"
    console.log(`Points added: ${adder}`); // log the variable "adder"
    let finalScore = this.grade + adder; // store "finalScore", consisting of the Initial Score plus the "adder" value
    if(finalScore > 100) { // if the sum is over 100, make the sum equal to 100
      finalScore = 100;
      console.log(`${this.name}'s final score is a perfect ${finalScore}.`)
    } else {
      console.log(`${this.name}'s final score is ${finalScore}.`)
    }
  }
}

//INSTRUCTOR class extends PERSON

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty,
    this.favLanguage = props.favLanguage,
    this.catchPhrase = props.catchPhrase
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`)
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`)
  }
}

const keiran = new Instructor({
  name: 'Keiran',
  age: undefined,
  location: 'Canada',
  specialty: 'JavaScript Classes',
  favLanguage: 'JavaScript',
  catchPhrase: 'Once you go to sleep and wake up, it will all make sense.'
});

// keiran.demo(keiran.specialty);

const martha = new Instructor({
  name: 'Martha',
  age: 27,
  location: 'Texas',
  specialty: 'Python',
  favLanguage: 'Python',
  catchPhrase: 'Code first, ask questions later.'
});

// martha.speak();

const josh = new Instructor({
  name: 'Josh',
  age: 34,
  location: 'California',
  specialty: 'SASS',
  favLanguage: 'CSS',
  catchPhrase: 'Make it look good too.'
});



//STUDENT class extends PERSON
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground,
    this.className = props.className,
    this.favSubjects = props.favSubjects,
    this.grade = (Math.floor(Math.random() * 50)) + 50
  }

  listsSubjects() {
    this.favSubjects.map(subject => console.log(subject))
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }

  graduate() {
    console.log(`••••••••••   BEGIN STUDENT ASSESSMENT   ••••••••••`)
    if(this.tallyScore() >= 70) { // calls the tallyScore method from the Person prototype, which Student extends
      console.log(`${this.name} ${this.lastName} is ready to graduate!`)
    } else {
      console.log(`${this.name} ${this.lastName} needs more practice with the material.`);
      if(this.tallyScore() <= 70) { // this will run adder function within the tallyScore method a second time to attempt to get above 70
        console.log(`${this.name} ${this.lastName} REALLY needs help.`)
      } else {
        console.log(`${this.name} ${this.lastName} is ready to graduate!`)
      }
    }
    console.log(`--------------------------------------------------`)
  }
}

const clif = new Student({
  name: 'Clif',
  lastName: 'Hodges',
  age: 29,
  location: 'Austin, TX',
  previousBackground: 'Designer',
  className: 'WEBPT8',
  favSubjects: ['CSS', 'JavaScript', 'React', 'Responsive Web Design'],
  grade: this.finalScore
})


clif.speak();
clif.listsSubjects();

josh.grade(clif, clif.favSubjects[2]); //wishful thinking 😅

const nick = new Student({
  name: 'Nick',
  lastName: 'Durbin',
  age: 26,
  location: 'Cleveland, OH',
  previousBackground: 'Podcasts',
  className: 'WEBPT8',
  favSubjects: ['JavaScript', 'React', 'MongoDB']
})

clif.graduate(); // calls graduate method from the Student prototype
nick.graduate();

nick.sprintChallenge(nick.favSubjects[0]);

//TEAMLEAD class extends INSTRUCTOR

class TeamLead extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName,
    this.favInstructor = props.favInstructor
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`)
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

const angelo = new TeamLead({
  name: 'Angelo',
  age: 29,
  location: 'San Francisco',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: 'Keep at it.',
  gradClassName: 'WEB6',
  favInstructor: 'Josh Knell'
})

angelo.standUp('#webpt8_angelo');

const derrick = new TeamLead({
  name: 'Keiran',
  age: 26,
  location: 'Kansas',
  specialty: 'JavaScript Closure',
  favLanguage: 'JavaScript',
  catchPhrase: 'Google it.',
  gradClassName: 'WEB8',
  favInstructor: 'Keiran Koslowski'
})

derrick.debugsCode(nick, derrick.specialty);