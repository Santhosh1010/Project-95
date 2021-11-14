const firebaseConfig = {
      apiKey: "AIzaSyC_9IBD0M1IXwex7XrChjsOpqJs-XTzGKM",
      authDomain: "kwitter-46e59.firebaseapp.com",
      databaseURL: "https://kwitter-46e59-default-rtdb.firebaseio.com",
      projectId: "kwitter-46e59",
      storageBucket: "kwitter-46e59.appspot.com",
      messagingSenderId: "333676847563",
      appId: "1:333676847563:web:246c07b14a75f41e43d64e"
    };
    
    firebase.initializeApp(firebaseConfig);

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
        });

            localStorage.getItem("room_name", room_name);

            window.location = "kwitter_page.html";
    }  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick = redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
      
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
        window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location("index.html");
}