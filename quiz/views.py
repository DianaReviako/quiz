from django.http import JsonResponse
from django.views.generic.base import TemplateView

from .models import Topic


class HomePageView(TemplateView):

    template_name = "main_quiz.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = Topic.objects.all()
        return context


def test_ajax(request):
    answer_id = request.POST.get('id')
    return JsonResponse({'text': f'success_id - {answer_id}'})
