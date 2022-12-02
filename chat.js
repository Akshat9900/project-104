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





function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value;
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {  document.getElementById("output").innerHTML = "";snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key;  childData = childSnapshot.val();
    if (childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name - message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
} }); }); } getData();

function updateLike(message_id)
{
    console.log("clicked on the like button -" + message_id);
    button_id=message_id;
    likes= document.getElementById(button_id).value;
    updated_likes=Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
  }