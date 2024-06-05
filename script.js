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
   //radiobuttons (queryselector)
    let degree = document.querySelector('input[type=radio]:cheked').value;
    let courses =document.querySelectorAll('input[type=checkbox]:checked');
    
    let student= new Student(name, age, degree); // nieuw student met de waarden die daar nu zijn (kan ook leeg)
    student.addCourses();

    
//empty inputfields
    document.getElementByIdByID('name').value =''; 
    document.getElementByIdByID('age').value ='';


    listOfStudents.push(student); //voeg de data toe aan een lijst, een Array
    //toon alert
    addAlert(true, 'Studen object created succesfully!'); 
    //(status, message)


    if(name === '' || age === ''){
        //checking for empty values. Show error alert
        addAlert(false, 'An error has happened');

    }else{
        //Everything is good. Continue to save student
        let student = new Student(name, age, degree);
        
        for(let c of boxes){
            student.addCourse(c.value);
        }

        listStudents.push(student);

        }
    
    
    //console.log(listOfStudents);
}

function addAlert(status, message){
    let content= ''; 

    if(status){  //true = succes

        content = '<div class="alert alert-success" role="alert">
                    ${message} 
                    </div>';

        } else { // false= error
            content = '<div class="alert alert-danger" role="alert">
                    ${message} 
                    </div>';
    }   

    //add message to top of page (eerst div in html zetten )
    document.getElementByIdByID('messsages').innerHTML = content; 
}

function createStudent() {  
    // geen parameters 
    let data = [];
    //Using an array, we are storing all the answers as new elements of that array.
    data.push(prompt('Name?'));
    data.push(prompt('Age?'));
    data.push(prompt('Degree?'));
     
   
    let student= new Student(); // nieuw student met de waarden die daar nu zijn (kan ook leeg)
    student.setPersonalDetails(data);
    
    
    while(true){
        let c = prompt('Course?');
        if(c){
            student.addCourse(c);
        }else{         
            break;
        }
    }
// add to list of students
    listOfStudents.push(student); 
   

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
