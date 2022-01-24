function openQuestion() {

}

function saveAnswer(obj) {
    const questionPk = obj
    const url = $("input#ajax-test-url").val();
    const csrf = getCsrfToken();
    const data = {
        'id': questionPk,
    }
    $.ajax({
        url: url,
        data: data,
        method: 'POST',
        headers: {'X-CSRFToken': csrf},
    })
        .done((response) => { console.log(response.text) })
        .error(function (error) { console.log(error) })
}

function getCsrfToken(){
  return $("input[name$='csrfmiddlewaretoken']").val();
}

function attachListeners(){
    const objects = $("td.assessment");
    objects.mouseenter(function(){ $(this).addClass("bg-info"); });
    objects.mouseleave(function(){ $(this).removeClass("bg-info"); });
    objects.click(openQuestion($(this)));
}


$(document).ready(function(){
    attachListeners()
  });
