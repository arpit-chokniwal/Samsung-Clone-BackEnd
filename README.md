# Backend of Samsung

Backend API for a Samsung clone website, built using NodeJS, Express, Mongoose, MongoDB Atlas and Heroku for storage.

## Documentation for API?

## Sign Up
- Method : POST
- URL : https://samsung-clone.herokuapp.com/register
- req body example : {"email" : "abc@gmail.com" or "number":"1234567891", "password": "secret123"}
- In response you will get a bearer token that you have to use in all requests

## Login
- Method : POST
- URL : https://samsung-clone.herokuapp.com/login
- req body example : {"email" : "abc@gmail.com" or "number":"1234567891", "password": "secret123"}
- In response you will get a bearer token that you have to use in all requests

## Paytm payment gateway link
- Visit the repo [https://github.com/HarshalGhutkule/Paytm-payment-gateway.git]
- https://samsung-paytm.herokuapp.com/

## Get Mobile list
- Method : GET
- URL : https://samsung-clone.herokuapp.com/mobiles
- In response you will get all mobiles data

## Get Single mobile detail
- Method : GET
- URL : https://samsung-clone.herokuapp.com/mobiles/${_id}
- In response you will get single mobile detail

## Team Members
- [Arpit Chokniwal](https://github.com/fabpot11)
- [Ritesh Kamthe](https://github.com/riteshjk)
- [Hemant Ahire](https://github.com/Hemantfw13)
- [Birendra Gupta](https://github.com/birendra20)
