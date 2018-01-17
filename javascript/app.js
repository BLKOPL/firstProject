

var Search_item
var LinktoArticle

// function SearchedWord (){
//
// };

function reachNYTapi(){

  Search_item=$("#searchBar").val().trim();
  if (Search_item){
   // If search item is Nan this will not let the user click submit
console.log(Search_item);
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9bbd8167715c47cf98ffd217a669c995&sort=newest&q=" + Search_item ;

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(NYTresponse) {
             console.log(NYTresponse.response.docs);


//         // my var called NytData holds the result
       // var NytData = NYTresponse.response.docs;
       var Articletitle =NYTresponse.response.docs[0].headline.main;
       // console.log(Articletitle);
       var LinktoArticle=NYTresponse.response.docs[0].web_url

       console.log(LinktoArticle);
       var ArticleImage ="http://www.nytimes.com/"+NYTresponse.response.docs[0].multimedia[0].url;
       console.log(ArticleImage);
      var tumbnail_image =$("<img>");
        tumbnail_image.attr('src',ArticleImage);
    $("#display-blue-article").html(tumbnail_image)




        // console.log(NytData);
        // console.log(Articletitle);
        // console.log(LinktoArticle);
        // console.log(ArticleImage);

      });
}
}

$("#submitBtn").on("click", function(event){
event.preventDefault();

reachNYTapi();

});

// $("#nytArticle").append(LinktoArticle);
