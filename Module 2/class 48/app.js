// console.log("Class 48");

// without using function 

// var std1 = {
//     name: "Soahib Mumtaz",
//     age : 20,
//     gender : "Male",
//     email : "sohaibmumtaz78gmail.com",
// }

// var std2 = {
//     name: "Asad Ali",
//     age : 27,
//     gender : "Male",
//     email : "asadaligmail.com",
// }

// var userName = document.getElementById("UserName")
// userName.innerHTML = "Hello 👋" + std2.name;


// another methode using function

// firstname 
// lastName
// age
// gender

// function std(firstname , lastName , gender , email){
//     this.firstname = firstname;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.email = email;
// }

// var std1 = new std("Sohaib" , "Mumtaz", "20" , "sohaibmumtaz78@gmail.com");
// var std2 = new std("Asad", " Ali", "27", "asadali@gmail.com")

// console.log("std1" , std1)
// console.log("std2" , std2)


// another exam

function sem(name , day ,roll,sem,courses,attendence){
    this.name = name;
    this.day = day;
    this.roll = roll;
    this.sem = sem;
    this.courses = courses;
    this.attendence = attendence;
}

var sem1 = new sem ("Sohaib Mumtaz" , "Tue-Fri" , "009" , "04" , ["Islamiyat" , "Automata" ,"Assembly" ,"ADBMS"], "75%");
var sem2 = new sem ("Asad Ali" , "Mon-Thu" , "019" , "07" , ["DBMS" , "Software Enginnering" ,"DSA" ,"Physics"], "78%");

console.log("sem1" , sem1); 
console.log("sem1" , sem1.sem); 
console.log("sem2" , sem2); 
console.log("sem" , sem2.name)



