import json
from django.http import request
from django.shortcuts import render
from django.views.generic.base import TemplateView
from.models import Answer, Topic, Question


class HomePageView(TemplateView):

    template_name = "main_quiz.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = Topic.objects.all()
        return context

    # def get_answer(request, question_pk):
    #     if request.is_ajax() and request.method == 'GET':
    #         answer = Answer.objects.filter(question_id=question_pk)
    #         return answer


def test_ajax(self):
    answer_id = request.post.get('id')
    print(answer_id)
    return json.dumps({'answer': f'success_id - {answer_id}'})
