'use strict'; 
//Wanneer we op de knop register student klikken, halen we de waardes uit de inputvelden op en maken we een Student object aan met een naam en leeftijd. 
//We slagen het object op in een array. Degree en courses komen in een latere oefening aan bod.

console.log('script linked!');

    document.getElementById('register'); 
  //  document.getElementById('show').addEventListener('click', showStudents);

let listOfStudents= [];

//constructor
function Student (name, age, degree){
    
    this.name=name;
    this.age= age; 
    this.degree= degree;
    this.courses= []; 
    this.setPersonalDetails = function (details){
        [this.name, this.age, this.degree] = details;
    }
    this.addCourses = function (...courses){
        this.courses = [...this.courses, ...courses]; 

    };
    this.addCourse = function (course){
        this.courses.push(course); 
    };

    this.showStudent = function (){
        let txt = `My name is ${this.name}. I am ${this.age} years old and follow ${this.degree} at EhB. 
        My courses are: ${this.courses.join(', ')}.`;

        return txt;
    }

}

function createStudent() {  
    // geen parameters
    let name= document.getElementById('name').value; // inputveld
    let age= document.getElementById('age').value;
   //radiobuttons (queryselector)
    let degree = document.querySelector('input[type=radio]:cheked').value;
    let courses =document.querySelectorAll('input[type=checkbox]:checked');
    
    let student= new Student(name, age, degree); // nieuw student met de waarden die daar nu zijn (kan ook leeg)
    //add Courses

        for(let c of boxes){
            student.addCourse(c.value);
     }

    }
    console.log(Student);


//empty inputfields
    document.getElementById('name')= '';
    document.getElementById('age').value = '';


         //Add file to localstorage
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

        //JSON.stringify

    localStorage.setItem('list', JSON.stringify(listOfStudents));


    listOfStudents.push(student); //voeg de data toe aan een lijst, een Array
    //toon alert
    addAlert(true, 'Studen object created succesfully!'); 
    //(status, message)


   // if(name === '' || age === ''){
        //checking for empty values. Show error alert
       // addAlert(false, 'An error has happened');    
    //console.log(listOfStudents);
//}

function addAlert(status, message){
    let content= ''; 

    if(status){  //true = succes

        content = `<div class="alert alert-success" role="alert">
        ${message} 
       </div>`;
} else {
content = `<div class="alert alert-danger" role="alert">
        ${message} 
       </div>`;
    }   

    //add message to top of page (eerst div in html zetten )
    document.getElementById('messsages').innerHTML = content; 
}



