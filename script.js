//complete this code
class Person {
	constructor(name,number){
		this.name=name;
		this.number=number
	}
	get name(){
		return this.name;
}
	set age(newAge){
		return this.age=this.newAge;
	}
}

class Student extends Person {
  study(){
	  console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
}
}

// const student= new Student("vivek",22);
// student.study();

// const teacher= new Teacher("Rahul",45)
// teacher.teach()

// student.age=24
// console.log(student)
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
