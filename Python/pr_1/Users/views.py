from django.shortcuts import render

# Create your views here.
from django.views.generic import CreateView
from django.urls import reverse_lazy
from Users.forms import CreationForm


class SignUp(CreateView):
    form_class = CreationForm
    succes_url = reverse_lazy("login")
    template_name = "signup.html"
    
####
