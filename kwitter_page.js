//YOUR FIREBASE LINKS
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
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
            }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
     

getData();
