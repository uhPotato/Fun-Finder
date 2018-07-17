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
  var config = {
    apiKey: "AIzaSyAHKzVuDz5Fzb_siJvcEC0tYakcxc9dyhY",
    authDomain: "things-to-do-744e7.firebaseapp.com",
    databaseURL: "https://things-to-do-744e7.firebaseio.com",
    projectId: "things-to-do-744e7",
    storageBucket: "things-to-do-744e7.appspot.com",
    messagingSenderId: "807935759914"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
/**
 * @return {!Object} The FirebaseUI config.
//  */
// function getUiConfig() {
//     return {
//       'callbacks': {
//         // Called when the user has been successfully signed in.
//         'signInSuccessWithAuthResult': function(authResult, redirectUrl) {
//           if (authResult.user) {
//             handleSignedInUser(authResult.user);
//           }
//           if (authResult.additionalUserInfo) {
//             document.getElementById('is-new-user').textContent =
//                 authResult.additionalUserInfo.isNewUser ?
//                 'New User' : 'Existing User';
//           }
//           // Do not redirect.
//           return false;
//         }
//       },
//       // Opens IDP Providers sign-in flow in a popup.
//       'signInFlow': 'popup',
//       'signInOptions': [
//         // TODO(developer): Remove the providers you don't need for your app.
//         {
//           provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//           // Required to enable this provider in One-Tap Sign-up.
//           authMethod: 'https://accounts.google.com',
//           // Required to enable ID token credentials for this provider.
//           clientId: CLIENT_ID
//         },
//         {
//           provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//           scopes :[
//             'public_profile',
//             'email',
//             'user_likes',
//             'user_friends'
//           ]
//         },
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         {
//           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//           // Whether the display name should be displayed in Sign Up page.
//           requireDisplayName: true
//         },
//         {
//           provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//           recaptchaParameters: {
//             size: getRecaptchaMode()
//           }
//         }
//       ],
//       // Terms of service url.
//       'tosUrl': 'https://www.google.com',
//       // Privacy policy url.
//       'privacyPolicyUrl': 'https://www.google.com',
//       'credentialHelper': CLIENT_ID && CLIENT_ID != 'YOUR_OAUTH_CLIENT_ID' ?
//           firebaseui.auth.CredentialHelper.GOOGLE_YOLO :
//           firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
//     };
//   }
  
//   // Initialize the FirebaseUI Widget using Firebase.
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());
//   // Disable auto-sign in.
//   ui.disableAutoSignIn();
  
  
//   /**
//    * @return {string} The URL of the FirebaseUI standalone widget.
//    */
//   function getWidgetUrl() {
//     return '/widget#recaptcha=' + getRecaptchaMode();
//   }
  
  
//   /**
//    * Redirects to the FirebaseUI widget.
//    */
//   var signInWithRedirect = function() {
//     window.location.assign(getWidgetUrl());
//   };
  
  
//   /**
//    * Open a popup with the FirebaseUI widget.
//    */
//   var signInWithPopup = function() {
//     window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
//   };
  
     /*
Google pop up authentication 
  */
  
function googleLogin() {
 
 var googleProvider = new firebase.auth.GoogleAuthProvider();
 googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

 userLogin(googleProvider);

//  console.log("Are you hitting it?");
//  console.log(provider);
//  firebase.auth().signInWithRedirect(provider);
}
function facebookLogin() {
    var facebookProvider = new firebase.auth.FacebookAuthProvider();
    console.log("GOT HERE");
    userLogin(facebookProvider);

}

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




//   /**
//    * Displays the UI for a signed in user.
//    * @param {!firebase.User} user
//    */
//   var handleSignedInUser = function(user) {
//     document.getElementById('user-signed-in').style.display = 'block';
//     document.getElementById('user-signed-out').style.display = 'none';
//     document.getElementById('name').textContent = user.displayName;
//     document.getElementById('email').textContent = user.email;
//     document.getElementById('phone').textContent = user.phoneNumber;
//     if (user.photoURL){
//       var photoURL = user.photoURL;
//       // Append size to the photo URL for Google hosted images to avoid requesting
//       // the image with its original resolution (using more bandwidth than needed)
//       // when it is going to be presented in smaller size.
//       if ((photoURL.indexOf('googleusercontent.com') != -1) ||
//           (photoURL.indexOf('ggpht.com') != -1)) {
//         photoURL = photoURL + '?sz=' +
//             document.getElementById('photo').clientHeight;
//       }
//       document.getElementById('photo').src = photoURL;
//       document.getElementById('photo').style.display = 'block';
//     } else {
//       document.getElementById('photo').style.display = 'none';
//     }
//   };
  
  
  /**
   * Displays the UI for a signed out user.
   */
//   var handleSignedOutUser = function() {
//     // document.getElementById('user-signed-in').style.display = 'none';
//     // document.getElementById('user-signed-out').style.display = 'block';
//     ui.start('#firebaseui-container', getUiConfig());
//   };
  
//   // Listen to change in auth state so it displays the correct UI for when
//   // the user is signed in or not.
//   firebase.auth().onAuthStateChanged(function(user) {
//     // document.getElementById('loading').style.display = 'none';
//     // document.getElementById('loaded').style.display = 'block';
//     user ? handleSignedInUser(user) : handleSignedOutUser();
//   });
  
  /**
   * Deletes the user's account.
//    */
//   var deleteAccount = function() {
//     firebase.auth().currentUser.delete().catch(function(error) {
//       if (error.code == 'auth/requires-recent-login') {
//         // The user's credential is too old. She needs to sign in again.
//         firebase.auth().signOut().then(function() {
//           // The timeout allows the message to be displayed after the UI has
//           // changed to the signed out state.
//           setTimeout(function() {
//             alert('Please sign in again to delete your account.');
//           }, 1);
//         });
//       }
//     });
//   };
  
  
  /**
   * Handles when the user changes the reCAPTCHA config.
   */
//   function handleRecaptchaConfigChange() {
//     var newRecaptchaValue = document.querySelector(
//         'input[name="recaptcha"]:checked').value;
//     location.replace(location.pathname + '#recaptcha=' + newRecaptchaValue);
  
//     // Reset the inline widget so the config changes are reflected.
//     ui.reset();
//     ui.start('#firebaseui-container', getUiConfig());
//   }
  
  
  /**
   * Initializes the app.
   */
  var initApp = function() {
    // document.getElementById('sign-in-with-redirect').addEventListener(
    //     'click', signInWithRedirect);
    // document.getElementById('sign-in-with-popup').addEventListener(
    //     'click', signInWithPopup);
    // document.getElementById('sign-out').addEventListener('click', function() {
    //   firebase.auth().signOut();
    // });
    // document.getElementById('delete-account').addEventListener(
    //     'click', deleteAccount
    //     );
    
    document.getElementById("google").addEventListener(
        "click", googleLogin
    );
    document.getElementById("facebook").addEventListener(
        "click", facebookLogin
    );
    // document.getElementById('recaptcha-normal').addEventListener(
    //     'change', handleRecaptchaConfigChange);
    // document.getElementById('recaptcha-invisible').addEventListener(
    //     'change', handleRecaptchaConfigChange);
    // // Check the selected reCAPTCHA mode.
    // document.querySelector(
    //     'input[name="recaptcha"][value="' + getRecaptchaMode() + '"]')
    //     .checked = true;
  };
  
  window.addEventListener('load', initApp);
  
  