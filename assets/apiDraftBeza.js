


var title
 // var authkey="9bbd8167715c47cf98ffd217a669c995"
// function reachAPI (){
//  title = "trump";
// title will be an array by the users input so in the global scoop this should be an empty array
// in the function this array is

//====================================================================
function reachNYTapi(){
  var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9bbd8167715c47cf98ffd217a669c995&q=" + title;

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(NYTresponse) {


        // my var called NytData holds the result
       var NytData = NYTresponse.results;
       var Articletitle =NYTresponse.results[0].title;
       var LinktoArticle=NYTresponse.results[0].url
       var ArticleImage =NYTresponse.results[0].multimedia[3].url;
        // console.log(NytData);
        console.log(Articletitle);
        console.log(LinktoArticle);
        console.log(ArticleImage);

       // for (i = 0; i < NYTresponse.results; i++) {
       //   var NytData = NYTresponse.results;
       //   var Articletitle =NYTresponse.results[0].title;
       //   var LinktoArticle=NYTresponse.results[0].url
       //   var ArticleImage =NYTresponse.results[0].multimedia[3].url;
       //    // console.log(NytData);
       //    console.log(Articletitle);
       //    console.log(LinktoArticle);
       //    console.log(ArticleImage);
       // };
      });
}


//===================================================
// // https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Today’s Paper/1.json
 $("#submitButton").on("click", function(event){
event.preventDefault();
reachNYTapi();
 });
