// console.log("First practice")


import fs from "fs";
// const server = ()=>{
//     fs.writeFileSync("hello.txt","Hello Friends")
// }

// server()

// read fs
// const readFile = () => {
//     const read = fs.readFileSync("hello.txt", "utf-8")
//     console.log(read)
// }

// readFile()

// update fs
// const updateFile = () => {
//     fs.appendFileSync("hello.txt" , "\nHello guyz")
// }

// updateFile()


//Delete fs
// const dlteFile = ()=>{
//     fs.unlinkSync("hello.txt")
// }
// dlteFile()



import http from "http"
import { console } from "inspector";

const server = http.createServer((req, res) => {
    console.log("reuest", req.url)

    if (req.url === "/"){
        res.end("Home Page")
    }else if(req.url === "/about"){
        res.end("About Page")
    }else if(req.url === "/contact"){
        res.end("Contact Page")
    }else if(req.url === "/products"){
        res.end("Products Page")
    }else{
       res.end("Page not found error:404")
    }
})

server.listen(5000, () => console.log("server running"))