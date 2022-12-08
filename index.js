// Samuel Kiarie -- 12/5/2022
//1. DOM Manipulation (read/write to the DOM)


const headingThree = document.getElementById("heading3");

function clickme() {
  headingThree.innerHTML= "CIS 124 DOM Manipulation!";
}
//2. Create read and write textboxes  

function showText(){
  var str1 = document.getElementById("text1").value;
  var str2 = document.getElementById("text2").value;

  alert("value in textbox 1 " + str1);

  if(str1 !== "" & (str1 == str2)){
    alert("username and password match");
  }else{
    alert("username and password do not match");
  }
}

// 3.	Create read and write drop-down select box
function select(){
  var select = document.getElementById("s1");
  var str = select.options[select.selectedIndex].innerHTML;
  document.getElementById("demo").innerHTML = str;

  alert("Selected: " + str);
}

//4. Create read and write radio buttons
 function check(){
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var c3 = document.getElementById("c3");

  if(c1.checked == true){
    alert("Color Selected: " + c1.value);

  } else if(c2.checked == true){
    alert("Color Selected: " + c2.value);

  } else if(c3.checked == true){
    alert("Color Selected: " + c3.value);

  }
 }
// 5.	Create read and write checkboxes

 function Toggle(){
  var r1 = document.getElementById("r1");
  var r2 = document.getElementById("r2");

  if(r1.checked == true){
    alert("r1 checked = unchecking " + r1.value);

    r1.checked = false;
    r2.checked = true;
  }else{
    r1.checked = true;
    r2.checked = false;
  }
 }
 // 6. Create a Form and complete validation(Password)

        function myFunction(){
          let password = document.getElementById("password");

          let myp = document.getElementById("demo");

       
          let message = "";
          // A strong password should have at least 13 characters,including numbers, characters, and symbols

          if(password.value.length <= 12){

            message = " Your input is not valid as it is less than 13 characters"
          alert(`${message}: ${password.value.length} characters only? please add more!`);
              myp.textContent = message;
            } else{
              message ="Input Okay";
          alert(`${message}: ${password.value.length} characters`);

        }};



       
        
        
        
        
        
        
        const $ = selector => document.querySelector(selector);

        document.addEventListener("DOMContentLoaded", () => {
    
        $("#Submit_fname").addEventListener("click", () => {
        

        const firstName = document.getElementById("first_name");
    
        let isValid = true;

            
        if (firstName.value == "") {

          
            document.getElementById("demo2").innerHTML = "Name must be filled out!";

            isValid = false;

        } else {
          document.getElementById("demo2").innerHTML = "";
        }
    
        if (isValid) {
           alert("Your first name: " + firstName.value);
            $("#myForm").submit();

        }
    });

//     
});

// let messeges = []
// if(fname.value === "" || fname.value === null){
//   messeges.push('name is required')
// }
// if(password.value.length <=7){
//   messeges.push("password must be longer than seven characters");
// }
// if(messeges.length < 0){
//   e.preventDefault()
//   errorElement.innerText = messeges.join(',');
// }