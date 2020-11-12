

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAXasngzF5LEwjyCzWhiGFdyRsVcIDT4BU",
    authDomain: "chat-app-project-part1.firebaseapp.com",
    databaseURL: "https://chat-app-project-part1.firebaseio.com",
    projectId: "chat-app-project-part1",
    storageBucket: "chat-app-project-part1.appspot.com",
    messagingSenderId: "661032681032",
    appId: "1:661032681032:web:9f473e451a28f9ac54e27d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name= "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
    });});}
            //End code
           
      getData();
          
      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
        }

        function Logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
        }