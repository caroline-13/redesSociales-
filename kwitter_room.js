
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

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
document.getElementById("userName").innerHTML = "!hola " + userName;
function addRoom() {
      room = document.getElementById("room").value;
      firebase.database().ref("/").child(room).update({ proposito: "agregar sala" });
      localStorage.setItem("room", room);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML+= row; 
         //Finaliza el código
            });
      });
}
getData();
function redirectToRoomName (name){
localStorage.setItem("Room_name", name);
window.location ="kwitter_page.html";
}
function logout (){
      localStorage.removeItem("room_name");
      localStorage.removeItem("userName");
      window.location = "index.html";
}