from django.shortcuts import render
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .models import Model
import datetime


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            login(request, new_user)
            return (request)
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
@csrf_exempt
def index(request):
    result = Model.objects.all()
    date = datetime.date.today()
    if request.user.is_authenticated():
        username = request.user.username
    if request.method == 'POST':
        title = request.POST.get('title')
        message = request.POST.get('message')
        author = request.POST.get('author')
        model = Model(title=title, message=message, author=author)
        model.save()
    return render(request, 'billboard/index.html', {'result': result, 'date': date, 'username': username})
