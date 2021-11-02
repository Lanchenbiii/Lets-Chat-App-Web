const firebaseConfig = {
    apiKey: "AIzaSyCLYK8EYW3xMVZ3rA5yRPaNRq9mzQOlpAQ",
    authDomain: "kwitter-c8b84.firebaseapp.com",
    databaseURL: "https://kwitter-c8b84-default-rtdb.firebaseio.com",
    projectId: "kwitter-c8b84",
    storageBucket: "kwitter-c8b84.appspot.com",
    messagingSenderId: "855484207290",
    appId: "1:855484207290:web:ed0302987d0f04875d7283"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
