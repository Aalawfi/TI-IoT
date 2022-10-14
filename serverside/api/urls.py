from turtle import update
from django.shortcuts import render
from django.urls import path
from django.http import JsonResponse, HttpResponse
from . import views

# test view
def sanity_checker(request):
    data = {
        'test': 'valid',
    }
    return JsonResponse(data, safe=False)

urlpatterns = [
    path('test/', sanity_checker, name='api test'),
    path('get-username/', views.get_username, name="User Name"),
    path('get-devices/', views.get_devices, name="Devices list"),
    path('<str:device_name>/get-data/', views.get_data, name="Recent data"),
    path('<str:device_name>/get-all-data/', views.get_all_data, name="All data"),
    path('<str:device_name>/post-data/', views.post_data, name="Post data"),
    path('update-phone/', views.update_phone, name="Update phone number")
]