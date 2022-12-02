
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA0ZQWKS0Y-xCa8YvOx_d3dPIWTef4mdZk",
    authDomain: "socialwebsitekwitter.firebaseapp.com",
    databaseURL: "https://socialwebsitekwitter-default-rtdb.firebaseio.com",
    projectId: "socialwebsitekwitter",
    storageBucket: "socialwebsitekwitter.appspot.com",
    messagingSenderId: "833149339391",
    appId: "1:833149339391:web:c29d480cbfaea3a4be6eca"
  };
  
  
  firebase.initializeApp(firebaseConfig);

//function addUser()
//{
   // user_name = document.getElementById("user_name").value;
   // firebase.database().ref("/").child(user_name).update({
   //     purpose : "adding user"
  //  });
// }
function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location ="chat_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}