//var imgfade = function(){
  //  $("#imgfade").fadeIn("slow");
    //$('#imgfade').fadeOut()
//}
/*
function changeImage()
{
    
    var img = document.getElementById("imgfade");
    $("#imgfade").fadeOut("slow");
    img.src = images[x];
    $("#imgfade").fadeIn("slow");
    x++;

    if(x >= images.length){
        x = 0;
    } 
    setInterval(changeImage(), 3000)
}

var images = [],
x = 0;
images[0] = "../static/cursor.png";
images[1] = "../static/relish.jpg";
images[2] = "../static/xmascookies.jpg";
setTimeout("changeImage()", 3000);
*/

/*var setTimes = function(){
	var count = 1;
	while(count<3){
		if(count%2==0){
			var myVar = setTimeout(function(){
				$("#"+count.toString()).fadeToggle();
			}, 5000);
		} else
	}
};*/
var fade = function(str){
	$(str).fadeToggle();
}

$(document).ready(function(){
	var count = 1;
	while(count<3){
		if(count%2==0){
			var myVar = setInterval(setTimeout(fade, 5000, "#"+count.toString()));
		} else{
			var myVar = setInterval(fade, 5000, "#"+count.toString());
		} count++;
	}
});

$("#b").click(function(){
  var data = $("#data").val().toLowerCase();
  console.log(data)
});

//RECIPES
/*
$(document).ready(function(){
  $("#b").click(function(){
    try{
    var recipes = $.csv.toArray("../recipes.csv");
    var data = $("#data").val().toLowerCase();
    console.log(data);
    }catch(e) {
      
    }
    $.getJSON("../home.html",{data:data},function(r) {
      $.each(recipes, function(index, i) {
        if ($(i.get(0)).toLowerCase().end().indexOf(data)>-1) {
          console.log(i[0]);
          console.log(r.result);
				  $("#recipe").append(r.result);
        }
      });
    });
  });
});
*/