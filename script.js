
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
   
    arr.map(arr => {
      if (arr.marks > 50) {
        console.log(arr.name +' '+ arr.marks);
      }
    });
  }
  
  function PrintStudentsbyForEach() {
   
    arr.forEach(arr => {
      if (arr.marks > 50) {
        console.log(arr.name +' '+ arr.marks);
      }
    });
  }
  
  function addData() {
   
    let newData = {
      id: 4,
      name: "susan",
      age: 20,
      marks: 45
    };
    arr.push(newData);
    console.log(newData)
  }
  
  function removeFailedStudent() {
    arr = arr.filter(student => student.marks >= 50);
    console.log(arr);
  }
  
  function concatenateArray() {
   
    let newArr = [
      {id: 4, name: "Sarah", age: 22, marks: 60},
      {id: 5, name: "Mike", age: 23, marks: 40},
      {id: 6, name: "Emma", age: 24, marks: 70}
    ];
   
    let concatenatedArr = arr.concat(newArr);
    console.log(concatenatedArr);
  }
  