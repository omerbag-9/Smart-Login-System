//////////sign up
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let requiredInput =  document.getElementById("required")
let successInput = document.getElementById("success")
let existInput = document.getElementById("exist")
let valid = document.getElementById("validEmail")
let sign_up_btn = document.getElementById("sign_up_btn")
let userList = []
if(localStorage.getItem("userData") != null){
    userList = JSON.parse(localStorage.getItem("userData"))
}
let emailValid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
/////////////sign in
let requiredSignIn = document.getElementById("requiredSignIn")
let ValidLogIn = document.getElementById("ValidLogIn")
let emailSignIn = document.getElementById("emailSignIn")
let passwordSignIn = document.getElementById("passwordSignIn")
/////////////


function Sign_up(){
    if(isEmpty() == true){
        requiredInput.classList.remove("d-none")
        valid.classList.add("d-none")
        successInput.classList.add("d-none")
        existInput.classList.add("d-none")  
    }else if(emailvalid() == true){
        requiredInput.classList.add("d-none")
        valid.classList.remove("d-none")
        successInput.classList.add("d-none")
        existInput.classList.add("d-none")  
    }
    else if(emailExist() == true){
        requiredInput.classList.add("d-none")
        valid.classList.add("d-none")
        successInput.classList.add("d-none") 
        existInput.classList.remove("d-none")      
    }
    else{
    let user = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
    }
     requiredInput.classList.add("d-none")
     valid.classList.add("d-none")
     successInput.classList.remove("d-none")    
     existInput.classList.add("d-none")  
        userList.push(user)
        console.log(userList);
        localStorage.setItem("userData",JSON.stringify(userList))
        window.location.href = "./sign-in.html";
    }
}

function isEmpty(){
 if(nameInput.value == '' || emailInput.value == '' || passwordInput.value == '' ){
    return true
 }
 else{
    return false
 }
}

function emailvalid(){
    if(emailValid.test(emailInput.value) != true){
        return true
    }
    else{
        return false
    }
  
}


function emailExist(){
    for (var i = 0; i < userList.length; i++) {
        if(userList[i].email  == emailInput.value){
            return true;
        }
    }
}

////////////////////sign in

function singIn(){
    for (let i = 0; i < userList.length; i++) {
        if(emailSignIn.value == userList[i].email && passwordSignIn.value == userList[i].password){
            return true
        }
    }
}

function validSignIn(){
    if(emailSignIn.value =='' ||  passwordSignIn.value ==''){
        requiredSignIn.classList.remove("d-none")
        ValidLogIn.classList.add("d-none")
    }else if(singIn()!=true){
        requiredSignIn.classList.add("d-none")
        ValidLogIn.classList.remove("d-none")
    }else{
        window.location.href = "./home.html";
    }
}
/////////////////////home page


function displayName(){
    for (let i = 0; i < userList.length; i++) {
        var username = userList[i].name
    }
    document.getElementById("myName").innerHTML = 'Hello ' + username
}
displayName()


function logout() {
    window.location.href = "./sign-in.html"
}