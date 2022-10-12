import os
import sys
import time
from twilio.rest import Client 

def send_sms(phone_num):

    account_sid = 'AC53918ba201c254d14e89d8d869e0b978' #os.environ['TWILIO_ACCOUNT_SID']
    auth_token = '4944a1c8177c98494d3300bf11c2af68' #os.environ['TWILIO_AUTH']
    msg_service = 'MG2131c41993dbbdccabfbba33f7342e51' #os.environ['TWILIO_MSG'] 
    client = Client(account_sid, auth_token)
    try:
        message = client.messages.create(  
                                    messaging_service_sid=msg_service, 
                                    body='TI-FI ALERT: TEMPERATURE HIT THRESHOLD!!',      
                                    to=str(phone_num) 
                                )
    except Exception as e:
        print('error while sending SMS message')
    time.sleep(5 * 60)  # sleep for five minutes