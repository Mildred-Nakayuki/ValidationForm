function validation(e){
    e.preventDefault()
    var firstName = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var email = document.getElementById("email").value;
    // var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var nationality = document.getElementById("nationality").value;
   

  if (firstName.length<1) {
        document.getElementById('fnameError').innerHTML = " Please Enter Your first name";
        fnameError.style.color = 'red';
    }
    if (Lname.length<1) {
        document.getElementById('errorLname').innerHTML = " Please Enter Your last name";
        errorLname.style.color = 'red';
    }
    if (email.length<1) {
        document.getElementById('errorEmail').innerHTML = " Please Enter Your email";
        errorEmail.style.color = 'red';
    }
    // if (gender.length<1) {
    //     document.getElementById('errorGender').innerHTML = " Please Select your gender"; 
    //     errorGender.style.color = 'red';     
    // }
    if (age.length<1) {
        document.getElementById('errorAge').innerHTML = " Please Enter Your age *"; 
        errorAge.style.color = 'red';     
    }
    if (phone.length<1) {
        document.getElementById('errorPhone').innerHTML = " Please Enter Your Phone number *";   
        errorPhone.style.color = 'red';   
    }
    if (password.length<1) {
        document.getElementById('errorPassword').innerHTML = " Please Enter Password *";   
        errorPassword.style.color = 'red';   
    }
    if (nationality.value === "0") {
        document.getElementById('errorNationality').innerHTML = " Please select an option *";
        errorNationality.style.color = 'red';
    }
  
    if(Fname.length<1 || Lname.length<1 || email.length<1 || phone.length<1 || password.length<1 || nationality.value === "0" || age.length<1 || gender.length<1 ){
         return false;
    }            
  }