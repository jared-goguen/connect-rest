from django.views.generic import TemplateView
from rest_framework.decorators import api_view
from django.http import JsonResponse


class IndexView(TemplateView):
    template_name = 'index.html'

