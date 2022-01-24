from django.shortcuts import render
from django.views.generic.base import TemplateView
from.models import Topic, Question


class HomePageView(TemplateView):

    template_name = "main_quiz.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = Topic.objects.all()
        return context
