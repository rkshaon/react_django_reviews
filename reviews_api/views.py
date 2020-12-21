from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from reviews_api.models import Review
from reviews_api.serializers import ReviewSerializer

@api_view(['GET'])
def reviewList(request):
    reviews = Review.objects.all().order_by('-id')
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)
