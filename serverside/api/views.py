# Django utils
from django.http import JsonResponse
from django.shortcuts import render

# api stuff
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser

from userspool.models import Userpool
from .serializers import *

# SMS app 
from .sms_app import send_sms
import threading

# based on a user, return JSON the name of the user
@api_view(['GET'])
def get_username(request, user_name):
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    serialized = UserSerializer(_user, many=False)
    return Response(serialized.data)

# based on a given user, get their devices
@api_view(['GET'])
def get_devices(request, user_name):
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    _devices = _user.devices.all()
    serialized = DevicesSerializer(_devices, many=True)
    return Response(serialized.data)

# based on the user, return their most recent data
@api_view(['GET'])
def get_data(request, user_name, device_name):
    device_name = device_name.lower()
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    data = _user.devices.get(device_name = device_name).dataset.last()
    serialized = DataSetSerializer(data, many=False)
    return Response( serialized.data)

# based on the user, return all their data
@api_view(['GET'])
def get_all_data(request, user_name, device_name):
    device_name = device_name.lower()
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    data = _user.devices.get(device_name = device_name).dataset.all()
    serialized = DataSetSerializer(data, many=True)
    return Response( serialized.data)


@api_view(['POST'])
def post_data(request, user_name, device_name):
    user_name = user_name.capitalize()
    device_name = device_name.lower()
    
    # find the pk of the device
    requested_device = RegisteredDevices.objects.get(device_name = device_name).pk

    requested_user = Userpool.objects.get(username=user_name)
    phone_num = requested_user.phone_num
    # print(request.data)

    Temp = request.data['data']['Tempurature']
    Humd = request.data['data']['Humidity']
    Movement = request.data['data']['Movement']
    Gas = request.data['data']['Gas']
    Generic = request.data['data']['Generic']

    if Temp > 80.0 and not phone_num == '-1':
    # to enable, change this to false 
        thread_active = False
    #    thread_active = False

        for thread in threading.enumerate():
            if thread.name == f'sms_thread_{user_name}':
                thread_active = True
        if thread_active == False:
            threading.Thread(name=f'sms_thread_{user_name}', target=send_sms, args=(phone_num,)).start()

    timestamp = request.data['timestamp']
    destination_device = requested_device
    
    parsed_package = {'Tempurature':Temp,
                      'Humidity':Humd,
                      'Movement':Movement, 
                      'Gas':Gas,
                      'Generic':Generic,
                      'to_device':requested_device}

    serializer = DataPostSetSerializer(data=parsed_package)
    
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# www.ti-fi-uofsc.com/Username/api/update-phone/
# {'new_number' : 'new string number'}
@api_view(['PUT', 'GET'])
def update_phone(request, user_name):
    user_name = user_name.capitalize()
    requested_user = Userpool.objects.get(username=user_name)

    if request._request.method == 'GET':
        print('get')
        return Response(requested_user.phone_num)

    else:
        print('put')
        new_phone = request.data['new_number']

        try:
            requested_user.phone_num = new_phone
            requested_user.save()    
            return Response(status=200)

        except Exception as e: 
            print('error\n')
            print(e)
            return Response(status=403)