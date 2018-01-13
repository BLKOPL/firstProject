console.log("hello");

 // var authkey="9bbd8167715c47cf98ffd217a669c995"

var title = "trump";
// title will be an array by the users input so in the global scoop this should be an empty array
// in the function this array is 

  var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9bbd8167715c47cf98ffd217a669c995&q=" + title;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
      });
// https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Today’s Paper/1.json
