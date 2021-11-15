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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}