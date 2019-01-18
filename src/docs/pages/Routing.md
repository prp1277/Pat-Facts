---
title: "Geocoding Locations"
date: "2019-01-13"
---

# Problem: Converting Addresses to Latitude & Longitude

I am currently working on a project that involves optimizing delivery routes for a small-business. I had used Power Bi in the past to map vendor locations around the US at my previous job, so I thought this would be a pretty simple dashboard - just import all the addresses, do some minor data cleaning and we'd be on our way.

I whipped up a quick prototype mapping customer locations using data from [AtoZdatabases.com](https://www-atozdatabases-com.kclibrary.idm.oclc.org/usbusinessdatabase), embedded the dashboard into an HTML page and sent out a link. The client was interested and sent me their customer list.

The Excel file I received seems to be an export from an SAP server and contains the following information:

```json
[ // JSON Formatting for simplicity
    {
        "customerNumber": "String", 
        "customerName": "String", 
        "department": "Nullable-String",
        "departmentName": "Nullable-String",
        "salesRep": "String", 
        "route": "String", 
        "suite": "Nullable-String",
        "street": "String", 
        "city": "String", 
        "state": "String", 
        "zip": Number,
        "yearSales": "String", 
        "yearOrders": Number
    },
    {...},
]
```
<br/>

I 
