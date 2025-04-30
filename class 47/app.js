// console.log("Class 47")

// initialize 

// var stdobj = {
//  age : 20,
// }

// stdobj.name = "Sohaib' Mumtaz"

// console.log(stdobj)

// var obj = {
//     name: "Sohaib Mumtaz",
//     age: 20,
//     gender: "Male",
//     email: "sohaibmumtaz78@gmail.com",
//     courses: ["0", "DSA", "DBMS"],
//     result: {
//         OOP: 71,
//         DSA: 50,
//         DBMS: 57,
//     }
// }

// console.log(obj)
// console.log(obj.age)
// console.log(obj.name)
// console.log(obj.result.DBMS)
// console.log(obj.result.OOP)
// console.log(obj.result.DSA)

// var obj = {
//     firstName: "Sohaib",
//     lastName: "Mumtaz",
//     age: 20,
//     getFullName : function(){
//         console.log("HEllo World" , obj.firstName, obj.lastName)
//         var fullName = this.firstName + "" + this.lastName
//         console.log(fullName);
//         return;
//     }
// }

// obj.getFullName()

// console.log(obj)


//multi function and also uses of array in one obj
var obj = {
    firstName: "Sohaib",
    lastName: "Mumtaz",
    age: 20,
    gender: "Male",
    coruses: ["OOP", "MVC", "ADBMS"],
    score: {
        OOP: 70,
        MVC: 38,
        ADMS: 80,
    },
    getFullname: function () {
        return this.firstName + " " + this.lastName;
    },

    getTotalmarks : function(){
        // var total = this.score.OOP + this.score.MVC + this.score.ADMS
        // return total;
        var total = 0;
        for(var key in this.score){
            console.log(key , this.score[key]);
            total += this.score[key];
        }
        console.log("total" ,total)
        return total;
    },
}

// console.log(obj)
// console.log(obj.getFullname())
// console.log(obj.getTotalmarks/)
// structuredClone.getTotalmarks

var stdfulName = obj.getFullname();
console.log(stdfulName)

var stdmarks = obj.getTotalmarks();
console.log("totalmarks",stdmarks)

