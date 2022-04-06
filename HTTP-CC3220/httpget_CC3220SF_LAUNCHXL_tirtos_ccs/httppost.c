/*
 * httppost.c
 *
 *  Created on: Mar 29, 2022
 *      Author: BAMAROOF
 */





/*
 *  ======== httpost.c ========
 *  HTTP Client POST example application
 */

/* BSD support */
#include "string.h"
#include <ti/display/Display.h>
#include <ti/net/http/httpclient.h>
#include <ti/utils/json/json.h>
#include "semaphore.h"
#include <stdint.h>
#include <stddef.h>
#include <stdio.h>




#define HOSTNAME              "http://www.ti-fi-uofsc.com"
#define REQUEST_URI           "/Bamaroof/api/bamaroofmcu/post-data/"
#define USER_AGENT            "HTTPClient (ARM; TI-RTOS)"
#define HTTP_MIN_RECV         (256)
#define POST_DATA "{\"data\":\"15\"}"
 // charset=utf-8" defines the json format
#define CONTENT_TYPE  "application/json; charset=utf-8"


extern Display_Handle display;
extern sem_t ipEventSyncObj;
extern void printError(char *errString,
                       int code);

/*
 *  ======== httpTask ========
 *  Makes a HTTP POST request
 */
void* httpTask(void* pvParameters)
{

    int value = 113; // Later this should be an extern from hardware.c
    char data_p [18];

    // puts `value` in place of %d and assign the string to data_p
    sprintf(data_p, "{\"data\":\"%d\"}", value);
    char * payload = data_p;

    bool moreDataFlag = true;
    char data[HTTP_MIN_RECV];
    int16_t ret = 0;
    int16_t len = 0;

    Display_printf(display, 0, 0, "Sending a HTTP POST request to '%s'\n",
                   HOSTNAME);

    HTTPClient_Handle httpClientHandle;

    int16_t statusCode;
    httpClientHandle = HTTPClient_create(&statusCode,0);
    if(statusCode < 0)
    {
        printError("httpTask: creation of http client handle failed",
                   statusCode);
    }

    ret =
        HTTPClient_setHeader(httpClientHandle,
                             HTTPClient_HFIELD_REQ_USER_AGENT,
                             USER_AGENT,strlen(USER_AGENT),
                             HTTPClient_HFIELD_PERSISTENT);

    ret |=
            HTTPClient_setHeader(httpClientHandle,
                                        HTTPClient_HFIELD_REQ_CONTENT_TYPE,
                                        CONTENT_TYPE,strlen(CONTENT_TYPE),
                                        HTTPClient_HFIELD_PERSISTENT);
    if(ret < 0)
    {
        printError("httpTask: setting request header failed", ret);
    }

    ret = HTTPClient_connect(httpClientHandle,HOSTNAME,0,0);
    if(ret < 0)
    {
        printError("httpTask: connect failed", ret);
    }

    ret =
        HTTPClient_sendRequest(httpClientHandle,HTTP_METHOD_POST,REQUEST_URI,
                               payload,
                               strlen(payload),
                               0);
    Display_printf(display, 0, 0, "Payload: %d\n", strlen(payload));
    Display_printf(display, 0, 0, "Payload: %c\n", payload);


    if(ret < 0)
    {
        printError("httpTask: send failed", ret);
    }

    if(ret != HTTP_SC_CREATED)
    {
        printError("httpTask: cannot get status", ret);
    }

    Display_printf(display, 0, 0, "HTTP Response Status Code: %d\n", ret);

    len = 0;
    do
    {
        ret = HTTPClient_readResponseBody(httpClientHandle, data, sizeof(data),
                                          &moreDataFlag);
        if(ret < 0)
        {
            printError("httpTask: response body processing failed", ret);
        }
        Display_printf(display, 0, 0, "%.*s \r\n",ret,data);
        len += ret;
    }
    while(moreDataFlag);

    Display_printf(display, 0, 0, "Received %d bytes of payload\n", len);

    ret = HTTPClient_disconnect(httpClientHandle);
    if(ret < 0)
    {
        printError("httpTask: disconnect failed", ret);
    }

    HTTPClient_destroy(httpClientHandle);
    return(0);
}
