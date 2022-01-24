from django.urls import path
from .views import HomePageView, save_answer, start_game

urlpatterns = [
    path('', HomePageView.as_view(), name='quiz'),
    path('start', start_game, name='start_game'),
    path('save', save_answer, name='save_answer'),
]
