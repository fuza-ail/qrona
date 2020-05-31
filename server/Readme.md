### RESTful API
---

#### Mobile app
---
##### POST /login --> test done
###### login
- Request body:
```
{
	"email": <email>,
	"password": <password>
}
```

- Response (200):
```
{
  "access_token": <access_token>
}
```

##### POST /register --> test done
###### register
- Request body:
```
{
	"no_ktp": <no_ktp>,
	"name":<name>,
	"email":<email>,
	"address":<address>,
	"phone": <phone>,
	"password": <password>
}
```

- Response (201):
```
{
  "access_token": <access_token>
}
```

##### GET /user --> test done
###### get user detail
- Response(200):
```
{
  "no_ktp": <no_ktp>,
  "name": <name>,
  "email": <email>,
  "address": <address>,
  "status": <status>,
  "phone": <phone>
}
``` 

##### PUT /user --> test done
###### edit user detail
- Request body:
```
{
	"name": <name>,
	"address": <address>,
	"phone": <phone>
}
```

- Response (200):
```
{
    "message": "profile has been updated"
}
```

##### POST /hotplace --> test done
###### create hotplace and generate barcode
- Request body:
```
{
	"name": "gojek amir",
	"address": "jalan asik",
	"type": "transport",
	"phone": "0812393",
  "barcode_url": "url gambar si barcode"
}
```

- Response (200):
```
{
  "id": 86,
  "name": "gojek amir",
  "barcode_url": "url gambar si barcode",
  "HotplaceId": 86,
  "updatedAt": "2020-05-31T21:19:32.169Z",
  "createdAt": "2020-05-31T21:19:32.169Z"
}
```

##### GET /hotplace --> test done
###### get user hotplaces

##### GET /hotplace/:id --> test done
###### get qr of the hotplace

##### DELETE /hotplace/:id --> test done
###### delete hotplace detail

##### GET /download/:id --> test done
###### download the qr

##### POST /checkin --> test done
###### scan barcode to check in

##### PUT /checkout -- test done
###### scan barcode to check out


#### Web app
---
##### POST /loginadmin --> test done
###### login as admin

##### GET /users --> test done
###### get all user data

##### GET /users/:id --> test done
###### get user by id

##### PUT /users/:id --> test done
###### update status user

##### GET /reghotplace --> test done
###### get all hotplace data

##### GET /reghotplace/:id --> test done
###### get hotplace by id


