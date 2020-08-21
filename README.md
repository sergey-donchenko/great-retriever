# Retriever

Client server application to demonstrate how to deal with large lists on both sides.

# Steps to run the app

In order to use this app, it should be filled with data. For this `generate` request should be executed.

Main URL is `http://localhost:3050/api/v1/`.

## 1. Generate content

type: `POST`
url: `data/generate`

## 2. Retrieve content

type: `GET`
url: `data/`

Additionally we can use `offset` and `limit` to set the parameters of the page we need to get.  
