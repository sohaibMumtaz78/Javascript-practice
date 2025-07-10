import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAYQ2HhkSlilKll2PMNB5edvmfq3eMcuZk",
    authDomain: "todo-project-b56cf.firebaseapp.com",
    projectId: "todo-project-b56cf",
    storageBucket: "todo-project-b56cf.firebasestorage.app",
    messagingSenderId: "988552048266",
    appId: "1:988552048266:web:4ff64a913032915e854773",
    measurementId: "G-H6BSQ7W1EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// let numbersColletion = collection(db, 'numbers')
let todoCollection = collection(db, "todos")



const todo_input = document.getElementById("todo_input")
const todo_addbtn = document.getElementById("todo_addbtn")
const todo_list = document.getElementById("todo_list")


todo_addbtn.addEventListener('click', addTodoToDb);

// create
// addTodoToDb();
async function addTodoToDb() {
    try {
        const obj = {
            todo: todo_input.value,
            createDate: new Date().toISOString(),
        };

        const docRef = await addDoc(todoCollection, obj);
        // console.log("Todo Added=>", docRef)
        // addTodoToDb();
        getTodosFromDB();
        todo_input.value = ""
    }
    catch (e) {
        console.log(e)
    }
}


// Show on Html / get
getTodosFromDB();
async function getTodosFromDB() {
    try {
        const querySnapshot = await getDocs(todoCollection);
        todo_list.innerHTML = ""
        querySnapshot.forEach((doc) => {
            console.log('Doc=>', doc.id)
            // console.log('Data=>' , doc.data())
            const { todo, createDate } = doc.data();
            const ele = `<li id="${doc.id}">${todo}  - ${new Date(createDate).toLocaleDateString()}</li>`
            todo_list.innerHTML += ele

            todo_list.childNodes.forEach((li) =>
                li.addEventListener('click', dltetodo)
            );
        });
    }
    catch (e) {
        console.log(e)
    }
}

async function dltetodo() {
    try {
        console.log(this)
        const docId = this.id;

        const docCollection = doc(db, 'todos', docId)
        const docRef = await deleteDoc(docCollection);
        getTodosFromDB()
        console.log("docRef=>", docRef)
    }
    catch (e) {
        console.log(e)
    }
}




// console.log(todo_input, todo_addbtn)




// addNumbertoDB();
// async function addNumbertoDB() {
//     try {
//         const docRef = await addDoc(numbersColletion, {
//             number: Math.round(Math.random() * 1000000),
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }



// todo complete