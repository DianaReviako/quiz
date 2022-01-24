from django.urls import path
from .views import HomePageView, test_ajax

urlpatterns = [
    path('', HomePageView.as_view(), name='quiz'),
    path('ajax-test', test_ajax, name='ajax_test'),
]
