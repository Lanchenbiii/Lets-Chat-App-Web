function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_nam" , user_name);
    window.location = "kwitter_room.html";
}