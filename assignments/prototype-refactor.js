/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.eat = true;
    this.digest = true;
  };
  
  const Someone = new Person("Danika", 22);

  
 
  
  Person.prototype.greet = function() {
    return `Hi my name is ${this.name} I am ${this.age} years old.`
  }
  
  Person.prototype.eat = function (food){
    if(this.eat){
      this.stomach.push(food);
    }
  }


  
  Person.prototype.digest = function(){
    if(this.digest){
      this.stomach = [];
    }
  }
  console.log(Someone.greet());