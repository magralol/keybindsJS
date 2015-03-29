$(function(){
    $(".panel").click(function(){
        //$(this).find(".exlanation").css( "display" ) ? $(this).find(".exlanation").show("slow") : $(this).find(".exlanation").hide("slow");
        $(this).find(".exlanation").toggleClass("vissible");
    });
    
    
    var options = {
      valueNames: [ 'title', 'desciption' ]
    };

    var userList = new List('list', options);
    
});