var firebaseConfig = {
      apiKey: "AIzaSyCCD4Qauneuz10ew-id8LTdcz5Bm8mrhg8",
      authDomain: "kwitter-24dcd.firebaseapp.com",
      databaseURL: "https://kwitter-24dcd-default-rtdb.firebaseio.com",
      projectId: "kwitter-24dcd",
      storageBucket: "kwitter-24dcd.appspot.com",
      messagingSenderId: "911601016628",
      appId: "1:911601016628:web:1c7f347cde63760c5c0f61"
    };
    ;
    
    firebase.initializeApp(firebaseConfig);


    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      }

      function send()
{
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
