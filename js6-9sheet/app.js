  // Qusetion 1

//   var a = 10;
//   console.log( "The value of a is = " + a);

//   ++a;
//   console.log(" The value of ++a  is + " + a);
// console.log("Now the value of num is:" + a);


//    console.log(" The value of a++  is = " +  a++ );
// console.log("Now the value of num is = " + a );


//    console.log(" The value of a++  is = " +  --a );
// console.log("Now the value of num is = " + a );


//    console.log(" The value of a++  is = " +  a-- );
// console.log("Now the value of num is = " + a );


  // Qusetion 2


//   var a = 2 , b =  1 ;

//   var Result = --a - --b + ++b + b--;



//   //      1 - 0 + 1 + 1     
// //           1+1 //2
// //          1+2 //3

//   console.log("a = " + a);       // 1
// console.log("b = " + b);       // 0
// console.log("result = " + Result); // 3


  // Qusetion 3
//    var  name  = prompt ("Enter your username");
//    console.log("Hello " + name + "! Welcome.");
   

  // Qusetion 4


//   var num = +prompt("Enter a number") || 5;

// console.log(num + " x 1 = "+ num * 1 );
// console.log(num + " x 2 = "  + num * 2);
// console.log(num + " x 3 = "+ num * 3 );
// console.log(num + " x 4 = " + num * 4);
// console.log(num + " x 5 = " + num * 5 );
// console.log(num + " x 6 = " + num * 6);
// console.log(num + " x 7 = " + num * 7 );
// console.log(num + " x 8 = " + num * 8);
// console.log(num + " x 9 = " + num * 9 );
// console.log(num + " x 10 = "+ num * 10 );


   //Qusetion 5
var name = (name = prompt("Enter Your Name : "));
  var subject1 = prompt("Enter first subject name");
 var subject2 = prompt("Enter second subject name");
var subjuct3 = prompt("Enter third subject name");

var totalMarksPerSubject = 100;


  var marks1 = +prompt(" Enter your obtained marks in  " + subject1);

  var marks2 = +prompt(" Enter your obtained marks " + subject2);

 var marks3 = +prompt(" Enter your obtained marks " + subjuct3);

 var totalMarks = totalMarksPerSubject * 3;

 var obtainedMarks = marks1 + marks2 + marks3 ;

  var percentage = (obtainedMarks / totalMarks) * 100;
var grade ="";
var ispassed= "fail";

 if ( percentage >= 80 && percentage<=90 ) {
  
   grade = "A+";
   ispassed = true;

 }  else if (percentage >=70 && percentage <=80) {
    grade = "A";
  ispassed = true;

 } else if (percentage >=60 && percentage <=80) {
    grade = "B";
  ispassed = true;

 } else if (percentage >=50 && percentage <=80) {
    grade = "C";
  ispassed = true;

} else if (percentage <= 45) {
    grade = "fail";
 ispassed = false;

 }  else{
  alert("Invalid input");
}


var check ="";

if (ispassed) {
   check = "passed";
  
 } else {
   check = "fail";
 }






document.write( `
<div class="marksheet-container">
    <div class="header">
        <h1>Excellence Academy</h1>
        <p>Annual Examination Progress Report — Academic Year 2025-2026</p>
    </div>

    <div class="student-info">
        <div><span>Student Name:</span> ${name} </div>
        <div><span>Roll Number:</span> EA-2026-089</div>
        <div><span>Class / Grade:</span> Grade 10 - A</div>
        <div><span>Date of Issue:</span> June 12, 2026</div>
    </div>

    <table class="marksheet-table">
        <thead>
            <tr>
                <th>Subject Name</th>
                <th class="text-right">Max Marks</th>
                <th class="text-right">Passing Marks</th>
                <th class="text-right">Marks Obtained</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${subject1}</td>
                <td class="text-right">${totalMarksPerSubject}</td>
                <td class="text-right">40</td>
                <td class="text-right">${ marks1}</td>

            </tr>
            <tr>
                                <td>${subject2}</td>
                <td class="text-right">${totalMarksPerSubject}</td>
                <td class="text-right">40</td>
                <td class="text-right">${ marks2}</td>


            </tr>
            <tr>
                                <td>${subjuct3}</td>
                <td class="text-right">${totalMarksPerSubject}</td>
                <td class="text-right">40</td>
                <td class="text-right">${ marks3}</td>
               </tr>
            <tr>

        </tbody>
        <tfoot>
          <tr>
<div class="summary-box">
    <div>
        <strong>percentage;</strong> ${percentage}%
    </div>
    <div>
        <strong>grade;</strong> ${grade}
    </div>
        <div class="result-status">Final Status: <span class="pass-text">${check}</span>
        </div>
</div>

            </tr>
        </tfoot>
    </table>
</div> `);

