import os
import time
from twilio.rest import Client 

def send_sms(phone_num):

    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH']
    msg_service = os.environ['TWILIO_MSG'] 
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