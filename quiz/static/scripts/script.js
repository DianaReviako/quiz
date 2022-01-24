$(document).ready(function(){
    $("td.assessment").mouseenter(function(){
      $(this).css("background-color", "blue");
    });
    $("td.assessment").mouseleave(function(){
        $(this).css("background-color", "");
      });
  });
