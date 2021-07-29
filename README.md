# Project: Inventory system
# 📁 Collection: User Route 


## End-point: Fetch all users
### Description: 
Method: GET
>```
>http://127.0.0.1:8082/users/all-users/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|MY-SPECIAL-SECRET|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Fetch Signed In User Details
### Description: 
Method: GET
>```
>http://127.0.0.1:8082/users/user/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwMjU1YWI4YzRiZTJmMDlkMTAwY2QiLCJpYXQiOjE2Mjc0MDEwMTYsImV4cCI6MTYyOTk5MzAxNn0.5QKqE8ifBmj2R-KPepICP5qt__NPf9BDE1JcpkCI5IY|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Signup
### Description: 
Method: POST
>```
>http://127.0.0.1:8082/users/signup/
>```
### Headers

|Content-Type|Value|
|---|---|
|||


### Body (**raw**)

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "testuser@gmail.com",
    "password": "test123",
    "confirmPassword": "test123"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update Current User Detail
### Description: 
Method: PUT
>```
>http://127.0.0.1:8082/users/user/update/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwMjU1YWI4YzRiZTJmMDlkMTAwY2QiLCJpYXQiOjE2Mjc0MDEwMTYsImV4cCI6MTYyOTk5MzAxNn0.5QKqE8ifBmj2R-KPepICP5qt__NPf9BDE1JcpkCI5IY|


### Body (**raw**)

```json
{
    "firstName": "John2222224444",
    "lastName": "Doe2222224444",
    "email": "testuser@gmail.com222224444"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Modify Password
### Description: 
Method: PUT
>```
>http://127.0.0.1:8082/users/user/modify-password/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAxMWY4OTM2MzM4NTU1NDkyZDZiOTciLCJpYXQiOjE2Mjc0NjM2MDcsImV4cCI6MTYzMDA1NTYwN30.n6jCXqRXtaj6zfYa8Uv4vWAKsDq5EYjKW1gAhry6Lkk|


### Body (**raw**)

```json
{
    "oldpassword": "test12345new",
    "newpassword": "test123",
    "confirmpassword": "test123" 
}

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Signin
### Description: 
Method: POST
>```
>http://127.0.0.1:8082/users/signin
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|MY-SPECIAL-SECRET|


### Body (**raw**)

```json
{
    "email": "testuser@gmail.com",
    "password": "test123"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Products Route 


## End-point: Add New Product
### Description: 
Method: POST
>```
>http://127.0.0.1:8082/products/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwZTdmZTY3YzhjNjQzY2U2ODQ1MWEiLCJpYXQiOjE2Mjc0NzgwNzgsImV4cCI6MTYzMDA3MDA3OH0.hYWoJhaQHUa_VP-DTlArJHHQIwXRTGrN4l1XiyTdFpY|


### Body formdata

|Param|value|Type|
|---|---|---|
|image|/Users/macos/Downloads/BRIVOSKI IMAGES/WhatsApp Image 2021-07-20 at 2.31.25 PM.jpeg|file|
|brand|Samsung|text|
|category|Mobile Phones|text|
|processor|1.4 Octa Core|text|
|os|Android|text|
|name|Galaxy S7 Edge|text|
|description|Amazing Samsung phone with 45MP rear camera|text|
|ram|4GB|text|
|storage|64GB|text|
|price|75000|text|
|no_ramaining|13|text|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Fetch All Own Products
### Description: 
Method: GET
>```
>http://127.0.0.1:8082/products/my-products/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwZTdmZTY3YzhjNjQzY2U2ODQ1MWEiLCJpYXQiOjE2Mjc0NzgwNzgsImV4cCI6MTYzMDA3MDA3OH0.hYWoJhaQHUa_VP-DTlArJHHQIwXRTGrN4l1XiyTdFpY|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Fetch Own Product By ID
### Description: 
Method: GET
>```
>http://127.0.0.1:8082/products/product/61017eca8d51277e175ba966
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwZTdmZTY3YzhjNjQzY2U2ODQ1MWEiLCJpYXQiOjE2Mjc0NzgwNzgsImV4cCI6MTYzMDA3MDA3OH0.hYWoJhaQHUa_VP-DTlArJHHQIwXRTGrN4l1XiyTdFpY|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update Own Product By ID
### Description: 
Method: PUT
>```
>http://127.0.0.1:8082/products/product/update/6101bb33871f1782ccd5de21
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwZTdmZTY3YzhjNjQzY2U2ODQ1MWEiLCJpYXQiOjE2Mjc0NzgwNzgsImV4cCI6MTYzMDA3MDA3OH0.hYWoJhaQHUa_VP-DTlArJHHQIwXRTGrN4l1XiyTdFpY|


### Body formdata

|Param|value|Type|
|---|---|---|
|image|/Users/macos/Downloads/BRIVOSKI IMAGES/WhatsApp Image 2021-07-20 at 2.31.27 PM (1).jpeg|file|
|brand|Samsung99999|text|
|category|Mobile Phones99999|text|
|processor|1.4 Octa Core99999|text|
|os|Android99999|text|
|name|Galaxy S7 Edge99999|text|
|description|Amazing Samsung phone with 45MP rear camera99999|text|
|ram|4GB99999|text|
|storage|64GB99999|text|
|price|7500099999|text|
|no_ramaining|1399999|text|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete Own Product By ID
### Description: 
Method: DELETE
>```
>http://127.0.0.1:8082/products/product/delete/6101bb33871f1782ccd5de21
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTAwZTdmZTY3YzhjNjQzY2U2ODQ1MWEiLCJpYXQiOjE2Mjc0NzgwNzgsImV4cCI6MTYzMDA3MDA3OH0.hYWoJhaQHUa_VP-DTlArJHHQIwXRTGrN4l1XiyTdFpY|


### Body formdata

|Param|value|Type|
|---|---|---|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
