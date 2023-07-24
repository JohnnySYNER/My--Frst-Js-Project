

if (window.location.href.includes("/index.html")) {
    //bogs counter
    let blogCounter = parseInt(localStorage.getItem('blogCounter')) || 0;
    document.getElementById("blogs-number").innerHTML = blogCounter;
    document.getElementById("begin-button").addEventListener("click", function(e) {
      blogCounter += 1;
      document.getElementById("blogs-number").innerHTML = blogCounter;
      if (blogCounter > 99) {
        document.getElementById("blogs-created").style.right = "3.7rem";
      }
      if (blogCounter > 999) {
        document.getElementById("blogs-created").style.right = "4.3rem";
      }
      localStorage.setItem('blogCounter', blogCounter);
    });
  
    //visits counter
    let visitCounter = parseInt(localStorage.getItem('visitCounter')) || 0;
    visitCounter++;
    localStorage.setItem('visitCounter', visitCounter);
    document.getElementById("visits-number").innerHTML = visitCounter;
  
    
    //Giving Functionality to the buttons on home page
document.getElementById("begin-button").addEventListener("click",function(e){
    window.location.href = "choice.html";
});
}
    document.addEventListener('DOMContentLoaded', function(){
    const homeNavElement = document.getElementById("homeNav")
    homeNavElement.addEventListener("click", function(){
        window.location.href = ("index.html")
    });

    });
    // Action button Create Blog redirect to login page\
    if(window.location.href.includes("/choice.html")){
document.getElementById("createBlogbtn").addEventListener("click",function(e){
    window.location.href = "login.html";
});
    }
//login page buttons functionality
if(window.location.href.includes("/login.html")){
  document.getElementById("signUpBtn").addEventListener('click',function(e){
    window.location.href = "signup.html"});
    document.getElementById("signInBtn").addEventListener('click',function(e){
      window.location.href = "signin.html";
  });
}

//signUp page buttons functionalities
if (window.location.href.includes("/signup.html")) {
  document.getElementById("signInUnderlinedid").addEventListener('click', function (e) {
    window.location.href = "signin.html";
  });
}

if(window.location.href.includes("/signin.html")){
document.getElementById("signUpUnderlinedid").addEventListener("click", function(e){
  window.location.href = "signup.html";
});
}


//retrieveing the data from the sign up form and saving it to the database <MongoDb Atlas> /also cheking if the repeated password is the same as the password entered

/*<input class="signUpImputBox" type="text" id="fsignUpName" name="fsignUpName" placeholder="Full Name"><br>
  <input class="signUpImputBox" type="email" id="fsignUpEmail" name="fsignUpEmail" placeholder="Email"><br>
  <input class="signUpImputBox" type="password" id="fPassword"name="fPassword" placeholder="Password"><br>
  <input class="signUpImputBox" type="password" id="fConfirmPassword"name="fConfirmPassword" placeholder="Confirm Password"><br> */

  if(window.location.href.includes("/signup.html")){
    document.addEventListener('DOMContentLoaded', () => {
      const formSignUp = document.getElementById('signUpFormId');
    
      formSignUp.addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = document.getElementById('fsignUpName').value;
        const email = document.getElementById('fsignUpEmail').value;
        const password = document.getElementById('fsignUpPassword').value;
        const confirmPassword = document.getElementById('fsignUpConfirmPassword').value;
        
        if (userName && password && email && confirmPassword) {
          if (password === confirmPassword) {
            console.log('Successfully Logged in');
            document.getElementById('passwordDoNotMatchId').style.display = 'none';
            document.getElementById('fsignUpConfirmPassword').style.border = '0';
    
            // Sending the data from the form to the server-side using a fetch POST request
            const formData = {
              userName: userName,
              email: email,
              password: password,
            };
            
            fetch('/submit-User-Form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            })
              .then((response) => {
                // Parse the response as JSON
                return response.json();
              })
              .then((data) => {
                console.log(data);
                // Handle the response data, which is now a JSON object
              })
              .catch((error) => {
                console.error('Error sending the data:', error);
              });
            
          } else {
            console.log('Passwords Do Not Match');
            document.getElementById('passwordDoNotMatchId').style.display = 'block';
            document.getElementById('fsignUpConfirmPassword').style.border = '2px solid red';
          }
        } else {
          console.log('This space is required');
        }
      });
    });
    
    //this is a example for letter use
//     const passwordInput = document.getElementById("fsignUpPassword");
// const confirmPasswordInput = document.getElementById("fsignUpConfirmPassword");
// const passwordMismatchMsg = document.getElementById("passwordDoNotMatchId");

// confirmPasswordInput.addEventListener('input', function() {
//     const password = passwordInput.value;
//     const confirmPassword = confirmPasswordInput.value;

//     if (password === confirmPassword) {
//         confirmPasswordInput.value.classList.remove("mismatched-password");
//         passwordMismatchMsg.style.display = "none";
//     } else {
//         confirmPasswordInput.value.classList.add("mismatched-password");
//         passwordMismatchMsg.style.display = "block";
//     }
// });


  }