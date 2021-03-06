$(document).ready(function(){

  // Initialize Firebase
  if(!firebase.apps.length){
    

    var config = {
      apiKey: "AIzaSyDEgMfb2aB9QdQvRLSuxy-VeLMgK2krJpc",
      authDomain: "fun-finder-837af.firebaseapp.com",
      databaseURL: "https://fun-finder-837af.firebaseio.com",
      projectId: "fun-finder-837af",
      storageBucket: "fun-finder-837af.appspot.com",
      messagingSenderId: "904384182866"
    };
    firebase.initializeApp(config);
}

  //Declaring a variable to store the database info...................
  var database = firebase.database();
  

  //Initializing the variables.........................
  var userEmail = "";
  var userPassword = "";

  //Putting the focus on the first field of the form...................
  var input = $("#user_email").focus();

  //Clears and hides the error display div when the user starts correcting the respective filed...................
  clearErrorDisplay();




  //Capturing the search user button click........................
  $("#signin").on("click", function(event){
    event.preventDefault();  

    if ($("#user_email").val(), $("#password").val() === "") {
      console.log("This is the email: " + $("#user_email").val());
      console.log("This is the password: " + $("#password").val());
      $("#error_display").show();
      var msg = $("<h3 class ='text-center'>").text("Please fill all the fields before submitting the form.").css("color", "white");
      $("#error_display").append(msg);
      $("#user_email").focus();
    } else {

      //Storing the user input values to the variables................................
      userEmail = $("#user_email").val().trim();
      userPassword = $("#password").val().trim();
      database.ref().on("value", function(snapshot){
        for (var obj in snapshot.val()) {
          console.log(snapshot.val()[obj]);
          var useremaildetails = snapshot.val()[obj].email;
          var userpassworddetails = snapshot.val()[obj].pwd;
          console.log("This is the email: ");
          console.log(useremaildetails);
          console.log(userEmail);
          console.log(typeof useremaildetails);
          console.log("This is the password: ");
          console.log(userpassworddetails);
          console.log(userPassword);
          console.log(typeof userpassworddetails);
          //check each object email and compare to user email;
          //if found return false;
          if (useremaildetails === userEmail && userpassworddetails === userPassword) {
            $(location).attr('href', 'index.html');
            return;
            end;
          } 
        } 
        
        $("#error_display").show();
        var msg = $("<h3 class ='text-center'>").text("Please check your email and password.").css("color", "white");
        $("#error_display").append(msg);
        //$("#user_email").val("");
        $("#password").val("");
        $("#user_email").focus();
          return;
          end;
         
      //}
      }, function(errorObject) {
        console.log("This is the error:" + errorObject.code);
      
      });


    }  //End of else if bracket...................
  });  //End of signin on click button..................

  $("#cancel").on("click", function() {
    $("#error_display").empty();
    $("#error_display").hide();
  });

  //This function will be called after the error message is displayed and the user corrects the respective field.......
  function clearErrorDisplay() {
    $("#user_email").on("keyup", function(){
      $("#error_display").empty();
      $("#error_display").hide();
    });

    $("#password").on("keyup", function(){
      $("#error_display").empty();
      $("#error_display").hide();
    });
  }

});

 //Utilizing the Firebase Google Provider Authentication to gain access to Google Login
 //Documentation found at https://firebase.google.com/docs/auth/web/google-signin
 // This function sets up Auth and calls userLogin Function to retrieve token 

// function googleLogin() {
 
//   var googleProvider = new firebase.auth.GoogleAuthProvider();
//   googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
 
//   userLogin(googleProvider);
 
//  //  console.log("Are you hitting it?");
//  //  console.log(provider);
//  //  firebase.auth().signInWithRedirect(provider);
//  }

//  //Utilizing the Firebase Facebook Provider Authentication to gain access to Facebook Login
//  //Documentation found at https://firebase.google.com/docs/auth/web/facebook-login
//  // This function sets up Auth and calls userLogin Function to retrieve token 
//  function facebookLogin() {
//      var facebookProvider = new firebase.auth.FacebookAuthProvider();
//      console.log("GOT HERE");
//      userLogin(facebookProvider);
 
//  }

// //Signs user in via popup window
// //Requires pop-up to be enabled by browser
//  function userLogin(provider) {
 
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//      // This gives you a Google Access Token. You can use it to access the Google API.
//      var token = result.credential.accessToken;
//      // The signed-in user info.
//      var user = result.user;
//      console.log(token);
//      console.log(user);
// //     window.locate.assign("index.html");
//      // ...
//    }).catch(function(error) {
//      // Handle Errors here.
//      var errorCode = error.code;
//      var errorMessage = error.message;
//      // The email of the user's account used.
//      var email = error.email;
//      // The firebase.auth.AuthCredential type that was used.
//      var credential = error.credential;
//      // ...
//    });
   
//  }


 
