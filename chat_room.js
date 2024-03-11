var firebaseConfig = {
    apiKey: "AIzaSyDyF9QbvpMLQRcfGKuflwrgB_KxP6cWVcg",
    authDomain: "letschat-6afdf.firebaseapp.com",
    databaseURL: "https://letschat-6afdf-default-rtdb.firebaseio.com",
    projectId: "letschat-6afdf",
    storageBucket: "letschat-6afdf.appspot.com",
    messagingSenderId: "352890551965",
    appId: "1:352890551965:web:f577a1bba1565d1ae31e74"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    console.log("x");
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room code"});
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room_name" + Room_names);
        row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div<<hr>";
    });});
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
