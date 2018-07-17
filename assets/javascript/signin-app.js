/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * FirebaseUI initialization to be used in a Single Page application context.
 */

  // Initialize Firebase
  if(!firebase.apps.length){
    
    var config = {
      apiKey: "AIzaSyAHKzVuDz5Fzb_siJvcEC0tYakcxc9dyhY",
      authDomain: "things-to-do-744e7.firebaseapp.com",
      databaseURL: "https://things-to-do-744e7.firebaseio.com",
      projectId: "things-to-do-744e7",
      storageBucket: "things-to-do-744e7.appspot.com",
      messagingSenderId: "807935759914"
    };
    firebase.initializeApp(config);
  }
  
  
  var database = firebase.database();
/**
 * @return {!Object} The FirebaseUI config.

*/  

// var uiConfig = {
//     callbacks: {
//           signInSuccess: function (user, credential, redirectUrl) {
//             }
//     },
//             credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
//             queryParameterForSignInSuccessUrl: JS_RESOURCES.FrontUrl,
//             signInFlow: 'popup',
//             signInOptions: [
//                 firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//                 firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//               //  firebase.auth.TwitterAuthProvider.PROVIDER_ID
//             ]
// };

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', uiConfig);



     /*
Google pop up authentication 
  */
  


 //Utilizing the Firebase Google Provider Authentication to gain access to Google Login
 //Documentation found at https://firebase.google.com/docs/auth/web/google-signin
 // This function sets up Auth and calls userLogin Function to retrieve token 
function googleLogin() {
 
 var googleProvider = new firebase.auth.GoogleAuthProvider();
 googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

 userLogin(googleProvider);

//  console.log("Are you hitting it?");
//  console.log(provider);
//  firebase.auth().signInWithRedirect(provider);
}

//Utilizing the Firebase Facebook Provider Authentication to gain access to Facebook Login
 //Documentation found at https://firebase.google.com/docs/auth/web/facebook-login
 // This function sets up Auth and calls userLogin Function to retrieve token 
function facebookLogin() {
    var facebookProvider = new firebase.auth.FacebookAuthProvider();
    console.log("GOT HERE");
    userLogin(facebookProvider);

}


//Signs user in via popup window
//Requires pop-up to be enabled by browser
function userLogin(provider) {

 firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(token);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}




  
  
  /**
   * Initializes the app.
   */
  var initApp = function() {
 
    
    document.getElementById("google").addEventListener(
        "click", googleLogin
    );
    document.getElementById("facebook").addEventListener(
        "click", facebookLogin
    );
   
  };
  
  window.addEventListener('load', initApp);
  
  