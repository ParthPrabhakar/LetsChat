var firebaseConfig = {
    apiKey: "AIzaSyBoTdwA49A11zeyZcA2bReahGL5PVWncnM",
    authDomain: "kwitter-ad274.firebaseapp.com",
    databaseURL: "https://kwitter-ad274-default-rtdb.firebaseio.com",
    projectId: "kwitter-ad274",
    storageBucket: "kwitter-ad274.appspot.com",
    messagingSenderId: "1080264033588",
    appId: "1:1080264033588:web:eefd29b843c92e4393d161"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
