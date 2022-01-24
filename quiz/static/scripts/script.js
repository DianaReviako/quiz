function openQuestion(questionPk) {
    const url = $("input#ajax-test-url").val();
    const csrf = getCsrfToken();
    const data = {
      'id': questionPk,
      'csrfmiddlewaretoken': csrf
    }
    console.log(data);
    $.ajax({
      url: url,
      context: data,
      method: 'POST',
      // headers: {'X-CSRFToken': csrf},
    })
};

function getCsrfToken(){
  return $("input[name$='csrfmiddlewaretoken']").val();
}


$(document).ready(function(){
    $("td.assessment").mouseenter(function(){
      $(this).css("background-color", "blue");
    });
    $("td.assessment").mouseleave(function(){
        $(this).css("background-color", "");
      });
  });
