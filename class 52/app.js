// console.log("Sign up page")

function signupholder() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var mail = document.getElementById("mail");
    var password = document.getElementById("password");

    // console.log(firstname)
    // console.log(lastname)
    // console.log(email)
    // console.log(password)

    //create user obj
    var userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: mail.value,
        password: password.value,
    }

    // console.log(userObj)

    // get user on localstorage
    var users = localStorage.getItem("users")
    // console.log(users)

    if (users == null) {
        var arr = [userObj]
        console.log("arr", arr)
        localStorage.setItem("users", JSON.stringify(arr));
    } else {
        var userArr = JSON.parse(users)

        for (var i = 0; i < userArr.length; i++) {
            console.log(userArr[i].email)
            if (userObj.email === userArr[i].email) {
                alert("Email alraedy registered")
                return
            }
        }


        //enter new user
        userArr.push(userObj)
        console.log("user updated" , userArr)

        localStorage.setItem("users", JSON.stringify(userArr))
    }

}

