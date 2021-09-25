function validation(){
    var name=document.validationForm.Fname.value;  
    var password=document.validationForm.password.value;  
      
    if (Fname==null || Fname==""){  
      alert("Name can't be blank");  
      return false;  
      
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
}