



$(function () {
  $('#datetimepicker2').datetimepicker({
      //locale: 'ru'
  });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".black").css("background" , "#20586e");
        }
  
        else{
            $(".black").css("background" , "");  	
        }
    })
  })

  function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" my-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " my-dark-grey";
  }
  document.getElementById("myLink").click();