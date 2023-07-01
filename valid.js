function validateName() {
  var name = document.getElementById("name").value;
  if (name.length <3 || /^[A-Za-z ]+$/.test(name)==false) {
    document.getElementById("errName").innerHTML = "Please Enter valid Name";
    return false;
  }
  else{
    document.getElementById("errName").innerHTML = "";
    return true;
  }
}


function validateEmail() {
  var email = document.getElementById("email").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false ) {
    document.getElementById("errEmail").innerHTML ="Please Enter valid Email";
    return false;
  }
  else
    document.getElementById("errEmail").innerHTML = "";
    return true;
}  


function validateMsg() {
  var message = document.getElementById("message").value;
  if (message.length <= 15) { 
    document.getElementById("errMsg").innerHTML = "Please Enter More Than 15 Characters";
    return false;
  }
  else{
    document.getElementById("errMsg").innerHTML = "";
    return true;
  }
}


function validate() {
  if( validateName() && validateEmail() && validateMsg()){
    return true;
  }else{
    return false;
  }
}


$("#submit-form").submit((e)=>{
  e.preventDefault()
  if(validate()){
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzSt0lC5cmY1zEkDotLAiyL35rqMmfhEB09QwOoKgYNyJQlqhL3MVtmtsa54XPf0S4/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully !!")
          window.location.reload()
      },
      error:function (err){
          alert("Something went Wrong")
      }
   })
  }
})
