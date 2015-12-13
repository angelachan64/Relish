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
var count;
var fade = function(){
	count = 1;
	while(count<3){
	  var myVar = setTimeout(function(){
	    $("#"+count.toString()).fadeToggle();
	  }, 5000);
	} count = 2;
	while(count<3){
	  var myVar = setTimeout(function(){
	    $("#"+count.toString()).fadeToggle();
	  }, 10000);
	}
}

$(document).ready(function(){
	var count = 1;
	while(count<3){
		var myVar = setInterval(fade, 5000);
		count++;
	}
});

$("#b").click(function(){
  var data = $("#data").val().toLowerCase();
  console.log(data);
});

//RECIPES

/*
$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "recipes.txt",
    dataType: "text",
    
  })
});

$(document).ready(function(){
  $("#b").click(function(){
    var input = $("#data");
    var d = input.val();
    input.val("");

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
});*/