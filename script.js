'use strict'; 
//Wanneer we op de knop register student klikken, halen we de waardes uit de inputvelden op en maken we een Student object aan met een naam en leeftijd. 
//We slagen het object op in een array. Degree en courses komen in een latere oefening aan bod.

console.log('script linked!');

    document.getElementById('register').addEventListener('click', createStudent); 
    document.getElementById('show').addEventListener('click', showStudents);

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
    this.addCourse = function (...courses){
        this.courses = [...this.courses, ...courses]; 


    }
    this.showStudent = function (){
        let txt = `My name is ${this.name}. I am ${this.age} years old and follow ${this.degree} at EhB. 
        My courses are: ${this.courses.join(', ')}.`;

        return txt;
    }

}

function createStudent() {  
    // geen parameters
    let name= document.getElementByIdByID('name').value; // inputveld
    let age= document.getElementByIdByID('age').value;
    
   
    let student= new Student(name, age); // nieuw student met de waarden die daar nu zijn (kan ook leeg)
   
    
   // while(true){
     //   let c = prompt('Course?');
       // if(c){
         //   student.addCourse(c);
     //   }else{         
       //     break;
    //    }
    //}


//empty inputfields
    document.getElementByIdByID('name').value= ''; // inputveld
    document.getElementByIdByID('age').value= '';



    listOfStudents.push(student); //voeg de data toe aan een lijst, een Array
    console.log(listOfStudents);

}

function showStudents (){

    for(let s of listOfStudents){
        //create paragraph fill 
       let p = document.createElement ('p');
        // with content 
        p.innerHTML = s.showStudents();       
       //and add to div 
       document.getElementById('content').appendChild(p);
    }

}