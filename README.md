# MyStore

<br>

## Description

MyStore is an e-commerce single-page application that gives the user an experience of an online store.
Users are able to navigate through the application and different products, add products to the cart, and purchase them.

<br><br>

## Setup

1. Clone the application into your local machine
1. Run `npm install`
1. Run `ng serve` or `npm run start`
1. Open your browser on `http://localhost:4200`.

<br><br>

## Scripts

```
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
```

<br><br>

## Components

    * product-container
      * single-product
    * product-information
    * nav-bar
    * cart
    * confirm-payment

<br><br>

## Services

    * ProductService
    * CartService
    * OrderService

<br><br>

## Routes

| PATH         | COMPONENT           |
| ------------ | ------------------- |
| /            | product-container   |
| /product/:id | product-information |
| /cart        | cart                |
| /confirm     | confirm-payment     |

<br><br>

> For more information, navigate to the docs folder.
