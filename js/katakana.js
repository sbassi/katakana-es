function fnHome() {
  self.location="index.html";
}
$("#home-btn").click(fnHome);

function fnHelp() {
  self.location="ayuda.html";
}
$("#question-btn").click(fnHelp);


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

    var reg_order = ['a', 'i', 'u', 'e', 'o', 
                     'ka', 'ki', 'ku', 'ke', 'ko',
                     'sa', 'shi', 'su', 'se', 'so',
                     'ta', 'chi', 'tsu', 'te', 'to', 
                     'na', 'ni', 'nu', 'ne', 'no',
                     'ha', 'hi', 'fu', 'he', 'ho',
                     'ma', 'mi', 'mu', 'me', 'mo',
                     'ya', 'yu', 'yo',
                     'ra', 'ri', 'ru', 're', 'ro', 
                     'wa', 
                     'n'];

  if (window.location.search.substring(1)=="azar"){
    // Orden al azar
  reg_order = shuffleArray(reg_order);
  $("#maincard").attr("src","imgs/"+reg_order[0]+".png");
  $("#maincard").attr("alt",reg_order[0]);
  $("#myModalLabel").text(reg_order[0]);
  }


var up_limit = reg_order.length;
// al apretar, desaparecen los clases opciones y aparecen mainkana
var indice = 0;


function fnNext() {
      if ($("#ant-btn").hasClass("disabled")){
         $("#ant-btn").removeClass("disabled");
      }
  if ((indice+1)<up_limit){
    indice++;
  }
  else
  {
    indice = 0;
    $("#ant-btn").addClass("disabled");
  }
  $("#maincard").attr("src","imgs/"+reg_order[indice]+".png");
  $("#maincard").attr("alt",reg_order[indice]);
  $("#myModalLabel").text(reg_order[indice]);
}

function fnAnt() {
    indice--;
    $("#maincard").attr("src","imgs/"+reg_order[indice]+".png");
    $("#myModalLabel").text(reg_order[indice]);
    if (indice==0){
    $("#ant-btn").addClass("disabled");
  }
}

function fnHome() {
  self.location="index.html";

}


$( "#home-btn" ).click(fnHome);
$( "#next-btn" ).click(fnNext);
$( "#ant-btn" ).click(fnAnt);

$(document).keydown(function(e){
    if (e.keyCode == 39) { 
      if ($("#ant-btn").hasClass("disabled")){
          $("#ant-btn").removeClass("disabled");
          }
    if ((indice+1)<up_limit){
      indice++;
    }
    else
    {
      indice = 0;
      $("#ant-btn").addClass("disabled");
    } 
      $("#maincard").attr("src","imgs/"+reg_order[indice]+".png");
      $("#maincard").attr("alt",reg_order[indice]);
      $("#myModalLabel").text(reg_order[indice]);

      return false;
    }
  else (e.keyCode == 37)  
    {

  if (indice==0){
    return false;
    }

    indice--;
    $("#maincard").attr("src","imgs/"+reg_order[indice]+".png");
    $("#maincard").attr("alt",reg_order[indice]);
    $("#myModalLabel").text(reg_order[indice]);
    if (indice==0){
    $("#ant-btn").addClass("disabled");
 
       return false;
    }
  }
});

var x=1;
$( "#imgcont" ).click(function() {
// poner letra
x++;

   
});


