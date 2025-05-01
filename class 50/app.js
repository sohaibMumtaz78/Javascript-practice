// console.log("Class 49");


// var parent = document.getElementById("parent");

// var info ={
//     id : 1,
//     name : "Sohaib Mumtaz",
//     age : "20",
//     email : "sohaibmumtaz78gmail.com",
// }

// console.log("info" , info);

// for static table in

// parent.innerHTML += `<td>${info.id}</td>`;
// parent.innerHTML += `<td>${info.name}</td>`;
// parent.innerHTML += `<td>${info.age}</td>`;
// parent.innerHTML += `<td>${info.email}</td>`;

// now for dynamic 

// for(var key in info){

//     console.log("info" , info[key])
//     parent.innerHTML += `<td>${info[key]}</td>`
// }


var info1 ={
    id : 1,
    name : "Sohaib Mumtaz",
    age : "20",
    email : "sohaibmumtaz78gmail.com",
}

var info2 ={
    id : 2,
    name : "SAsad Ali",
    age : "27",
    email : "asadaligmail.com",
}

var parent = document.getElementById("parent");
var info = [info1 , info2]; //array of obj
console.log("info" ,  info)

for(var i = 0; i < info.length; i++){
    console.log("info" , info[i])
    parent.innerHTML += `<tr>
                <td>${info[i].id}</td>
                <td>${info[i].name}</td>
                <td>${info[i].age}</td>
                <td>${info[i].email}</td>
            </tr>`
}






