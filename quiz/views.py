from django.http import JsonResponse
from django.shortcuts import redirect
from django.views.generic.base import TemplateView

from .models import Topic, Question


class HomePageView(TemplateView):

    template_name = "game.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = Topic.objects.all()
        return context


def save_answer(request):
    question_id = request.POST.get('id')
    question = Question.objects.get(id=question_id)
    question.is_answered = True
    question.save()
    return JsonResponse({'status': question_id})

def start_game(request):
    questions = Question.objects.all()
    for question in questions:
        question.is_answered = False
        question.save()
    return redirect('quiz')
    