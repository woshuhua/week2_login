let dbUsers = [
    {
        username: "Wong",
        password: "password",
        name: "Wong Xu Huan",
        email: "B022110214@student.utem.edu.my"
    },
    {
        username: "Chua",
        password: "010uehs",
        name: "CHua CF",
        email: "Chua233@gmail.com"
    },
    {
        username: "Lee",
        password: "18sh38",
        name: "Lee WH",
        email: "Lee823@gmail.com"
    },
    {
        username: "Teow",
        password: "Teow1943",
        name: "Teow CY",
        email: "Teow1937@gmail.com"
    }
]

function login(username, password) {
    console.log("Someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if (matched){
        if(matched.password == password) {
            return matched
        } else{
            return "Password not matched"
        }
    } else{
        return "Username not found"
    }
}

function register(newusername, newpassword, newname, newemail){
    //TODO: Check username if exist
    let checking = dbUsers.find(element=>
        element.username == newusername
        )
    if(checking){
        console.log("This username has been registered")
    }
    else{
    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
    })
    console.log("Register successful")
}
}

//try to login
//console.log(login("Wong", "password"))
//console.log(login("Chua", "123456"))
//console.log(login("utem","1he82"))

//try to register
register("utem","utem1038","Uine13", "utem1372@shdu.com")
console.log(login("utem","utem1038"))