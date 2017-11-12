// Initialize Firebase
var config = {
  apiKey: "AIzaSyATk0vcxRIdmbYsnivfzwO9isx46FmhXI4",
  authDomain: "hangr-18d2a.firebaseapp.com",
  databaseURL: "https://hangr-18d2a.firebaseio.com",
  projectId: "hangr-18d2a",
  storageBucket: "hangr-18d2a.appspot.com",
  messagingSenderId: "390542952719"
};
firebase.initializeApp(config);

console.log(firebase);

var database = firebase.database();

//Retrieving data
var ref = database.ref('people');
ref.on('value', gotData, errData);

function gotData(data) {
  // console.log(data.val());
  if (people = null) {
  } else {
  }

  var people = data.val();
  var keys = Object.keys(people);
  console.log(keys);
  var dataSet = {};
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var fbName = people[k].fbName;
    var fbOnline = people[k].fbOnline;
    var node = document.createElement("LI");
    var span = document.createElement("SPAN");
    var positive = document.createElement("SPAN");
    var negative = document.createElement("SPAN");
    var textnode = document.createTextNode(fbName);
    positive.setAttribute("aria-hidden", "true");
    negative.setAttribute("aria-hidden", "true");
    node.appendChild(textnode);
    node.setAttribute("id", k);
    node.setAttribute("class", "list-group-item");
    document.getElementById("list").appendChild(node);
    span.setAttribute("class", "badge");
    span.setAttribute("id", i);
    document.getElementById(k).appendChild(span);
    if (fbOnline === true) {
      console.log(true)
      positive.setAttribute("class", "glyphicon glyphicon-ok-sign");
      document.getElementById(i).appendChild(positive);
    } else {
      console.log(false)
      negative.setAttribute("class", "glyphicon glyphicon-remove-sign");
      document.getElementById(i).appendChild(negative);
    }




  }

}


function errData(data) {
  console.log("Error");
  console.log(err);
}

  /*
  To push data:

  var data = {
    name: "DTS",
    score: 43
  }

  ref.push(data);
  */