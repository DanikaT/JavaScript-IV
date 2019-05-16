// CODE here for your Lambda Classes

/*```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/


class Person{
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }   
}

/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'*/

 class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.speciality;
        this.catchPhrase = attributes.speciality;
        
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}
/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`*/
 class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.language = attributes.language;
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));;
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }

}

/*
#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`*/

  class ProjectManager extends Instructor {
      constructor(attributes) {
         super(attributes);
          this.favInstructor = attributes.favInstructor;
          this.gradClassName = attributes.gradClassName;
      }
      standUo(channel) {
        return `${student.name} announces to ${channel}. @channel standy times!`;
    }

    debugsCode(){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
  }

  const Johnny = new Student ({
      name: "Johnny",
      location: "UK",
      age: 32,
      gender: "male",
      favsubjects: ["CSS", "Javascript"],
      previousBackground: "marketing",
      className: "WEBEU2",
      language: "English",
  });

  const Gabriel = new Instructor ({
    name: "Gabriel",
    location: "Spain",
    age: 32,
    gender: "male",
    speciality: "coding wizardry",
    Favlanguage: "All",
    catchPhrase: "Use the shortcut keyssss!"
});

const Alex = new ProjectManager ({
    name: "Alex",
    location: "London",
    age: 32,
    gender: "male",
    speciality: "coding wizardry",
    Favlanguage: "All",
    catchPhrase: "Here's where the magic happens!!",
    favInstructor: "Gabe",
    gradClassName: "WEBEU1"
});
