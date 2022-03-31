/*
 * Copyright (c) 2019-2020, Texas Instruments Incorporated
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * *  Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * *  Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * *  Neither the name of Texas Instruments Incorporated nor the names of
 *    its contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 *  ======== json.c ========
 */


#include <ti/utils/json/json.h>
// The template is needed to specify the structure of the json object - its
// field names and types
#define EXAMPLE_TEMPLATE    \
"{"                         \
    "\"Data\": int32"       \
"}"


void JsonBuffer() {
    Json_Handle templateHandle;
    Json_Handle objectHandle;
    uint16_t    bufsize=256;
    char        outputBuffer[bufsize];
    // The name must be quoted to access the corresponding JSON field
    char        *fieldName  = "\"age\"";
    int32_t     ageVal      = 42;

    // Create an internal representation of the template for the library's use
    Json_createTemplate(&templateHandle, EXAMPLE_TEMPLATE,
                        strlen(EXAMPLE_TEMPLATE));
    // Allocate memory needed for an object matching the generated template
    Json_createObject(&objectHandle, templateHandle, 0);
    // To fill in the object with actual data, call Json_setValue
    Json_setValue(objectHandle, fieldName, &ageVal, sizeof(ageVal));
    // Output data from the JSON objectHandle into the outputBuffer
    Json_build(objectHandle, outputBuffer, &bufsize);
    // Any fields not set will not be part of the output


    Json_Handle templateHandle;
           Json_Handle objectHandle;
           uint16_t    bufsize=256;
           int16_t try1;
           int16_t try2;
           int16_t try3;
           int16_t try4;
           char        outputBuffer[bufsize];
           // The name must be quoted to access the corresponding JSON field
           char        *fieldName  = "\"age\"";
           int32_t     ageVal      = 42;

           // Create an internal representation of the template for the library's use
           try1 = Json_createTemplate(&templateHandle, EXAMPLE_TEMPLATE,
                               strlen(EXAMPLE_TEMPLATE));
           // Allocate memory needed for an object matching the generated template
           try2 = Json_createObject(&objectHandle, templateHandle, 0);
           // To fill in the object with actual data, call Json_setValue
           try3 = Json_setValue(objectHandle, fieldName, &ageVal, sizeof(ageVal));
           // Output data from the JSON objectHandle into the outputBuffer
           try4 = Json_build(objectHandle, outputBuffer, &bufsize);
           // Any fields not set will not be part of the output
}
