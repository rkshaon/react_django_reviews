from django.urls import path
from . import views

urlpatterns = [
    path('review-list/', views.reviewList, name='review-list'),
]
