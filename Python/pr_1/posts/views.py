from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
def index(request):
    latest = Post.objects.order_by('-pub_date')[:11]
    # output = []
    # for item in latest:
    #     output.append(item.text)
    return render(request, "index.html",{"posts": latest})

# Create your views here.
