studentId = 23400;
admissionNo = 314;
userName = "Ridha";
marks = [49, 67, 79];
student = {
  name: "Ridha",
  age: "23",
  phone: "9896756453",
};

console.log(typeof(studentId))
console.log(typeof(student));
console.log(studentId);
console.log(userName);
console.log(marks);
console.log(student);
console.log('admission number of ' + userName + ' is ' + admissionNo);
console.log(`Student ID of ${userName} is ${studentId} `);
console.log(`The mark of ${userName} is ${marks[2]}`)
console.log(student.name);
console.log(student["age"]);
console.log(student['phone']);

var num1 = 2;
var num2 = 45;
var result = num1 + num2;
console.log(result);

console.log('**************')
function add(a,b){
    var sum = a + b
    console.log(sum);
    return sum
    // console.log('rhu')
}


console.log(add(3,5))
console.log(add(46,72));