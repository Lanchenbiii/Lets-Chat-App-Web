const firebaseConfig = {
  apiKey: "AIzaSyAGgO0NWurTrv6UuIwl-HViPjDBDfd9m8w",
  authDomain: "lets-chat-web-app-f8d39.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-f8d39-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-f8d39",
  storageBucket: "lets-chat-web-app-f8d39.appspot.com",
  messagingSenderId: "727170358819",
  appId: "1:727170358819:web:346b99a1bc1f01b81c5b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "sarang"
    });
}