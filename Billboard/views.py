from django.shortcuts import render
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            login(request, new_user)
            return index(request)
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
def index(request):
    return render(request, 'billboard/index.html')



