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
        var people = data.val();
        var keys = Object.keys(people);
        console.log(keys);
        var dataSet = {};
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var fbName = people[k].fbName;
            console.log(people[k]);

            
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