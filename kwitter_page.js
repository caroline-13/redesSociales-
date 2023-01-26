//TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCtdxFNJomBtb03rScdPhRvloLuLZJyu4g",
      authDomain: "redsocialcrrv.firebaseapp.com",
      databaseURL: "https://redsocialcrrv-default-rtdb.firebaseio.com",
      projectId: "redsocialcrrv",
      storageBucket: "redsocialcrrv.appspot.com",
      messagingSenderId: "457168587053",
      appId: "1:457168587053:web:6829ab78fc8a5a16d1aba4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            nombre: userName,
            mensaje: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "proposito") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código
                        nombre = message_data["nombre"];
                        mensaje = message_data["mensaje"];
                        like = message_data["like"];
                        row = "<h4>"+nombre+"</h4> <h4 class='message_h4'>"+mensaje+"</h4> <button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"+like+"👍🏻</button>";
                     document.getElementById("output").innerHTML+=row;
                        //Termina código
                  }
            });
      });
}

getData();
function updateLike(mensajeId){
      likes = document.getElementById(mensajeId).value;
      likesActualizados = Number (like) + 1;
      firebase.database().ref(room_name).child(mensajeId).update({like:likesActualizados});
}

