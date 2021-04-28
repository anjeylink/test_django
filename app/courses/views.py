from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse('I really need to restart? ')
