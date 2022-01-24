function openModal(question) {
    let questionPk = question.attr('id')
    let questionText = $("input[name='text']", question).val()
    let questionValue = $("input[name='value']", question).val()
    let questionAnswer = $("input[name='answer']", question).val()
    let questionModal = $('#question_modal')[0]
    $('#modalText', questionModal).text(questionText)
    $('#modalValue', questionModal).text(questionValue)
    $('#modalAnswer', questionModal).text(questionAnswer)
    $('#questionPk', questionModal).val(questionPk)
    let modal = new bootstrap.Modal(questionModal, {keyboard: false})
    modal.show()
}

function showAnswer(){
    let questionModal = $('#question_modal')[0]
    $('#modalAnswer', questionModal).removeClass('d-none')
}

function hideAnswer(questionModal){
    $('#modalAnswer', questionModal).addClass('d-none')
}

function closeModal(questionModal){
    let modal = new bootstrap.Modal(questionModal, {keyboard: false})
    modal.hide()
}

function send(url, data){
    const csrf = getCsrfToken();
    $.ajax({
        url: url,
        data: data,
        method: 'POST',
        headers: {'X-CSRFToken': csrf},
    })
        .done((response) => {
            const questionPk = $('#questionPk', '#question_modal').val()
            if (response.status && Number(response.status) === Number(questionPk)){
                markAsAnswered(questionPk)
            }
        })
}

function markAsAnswered(questionPk) {
    $(`td#${questionPk}`).addClass('bg-danger')
}

function saveAnswer() {
    let questionModal = $('#question_modal')[0]
    const questionPk = $('#questionPk', questionModal).val()
    const url = $("input#save-url").val();
    const data = {'id': questionPk}
    send(url, data)
    hideAnswer(questionModal);
    closeModal(questionModal);
}

function getCsrfToken(){
  return $("input[name$='csrfmiddlewaretoken']").val();
}

function attachListeners(){
    const objects = $("td.assessment");
    objects.mouseenter(function(){ $(this).addClass("bg-info"); });
    objects.mouseleave(function(){ $(this).removeClass("bg-info"); });
    objects.on('click', function (){ openModal( $(this) ) });
    $('#modal-show-answer').on('click', function (){ showAnswer() })
    $('#question_modal').on('hide.bs.modal', function () { saveAnswer() })
}

function markAnswerStatus() {
    for (let td of $($("td:not(.image)"))) {
        let status = $("input[name='status']", td).val();
        let questionPk = $(td).attr('id');
        if (status === 'True') {
            markAsAnswered(questionPk)
        }
    }
}


$(document).ready(function(){
    attachListeners()
    markAnswerStatus()
  });
