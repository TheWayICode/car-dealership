# CarCar

Team:

* Person 1 - Which microservice? Automobile Service - Robin Kim
* Person 2 - Which microservice? Auto Sales - Farzan

## Design
[![Project Design](Images\ProjectBetaLayout.png)]

# Project CarCar

The Car Dealership Web Application is a comprehensive platform designed to simplify the management of automobile dealerships.

This application offers a variety of features, including the ability to display a list of manufacturers, create new manufacturers, and display a list of vehicle models.

With this application, dealerships can also create new vehicle models and add them to their inventory.

The application also allows dealerships to display a list of all automobiles currently in inventory, as well as create new automobile entries.

The application also offers functionality for dealership staff, including the ability to enter technician information and schedule service appointments.

Dealership staff can view a list of upcoming appointments, as well as access service history information for individual vehicles.

In addition to these features, the Car Dealership Web Application also enables dealerships to manage their sales team and customer interactions.

Salespeople can be added to the application, and potential customers can be entered into the system. Dealerships can also create sale records and view a list of all sales.

Finally, the application allows dealerships to view sales histories for individual salespeople, providing a comprehensive picture of their performance.

Overall, the Car Dealership Web Application provides a one-stop-shop for managing all aspects of an automobile dealership, from inventory management to sales and service appointments.

___


## Installation

Install CarCar with Docker

```bash
    docker volume create beta-data
    docker-compose build
    docker-compose up
```

## API Reference for Inventory Microservice
Manufacturer: the company that manufactures the automobile

VehicleModel: the model of a vehicle created by the manufacturer

Automobile: the actual automobile of a specific vehicle model


#### List Manufacturers

```http
  GET http://localhost:8100/api/manufacturers/
```
```python
{
	"name": "Tesla"
}
```
### Frontend Example
```http
  http://localhost:3000/manufacturers
```

![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/3a03805c9cb2d88fe0d849c6be11cd5f.png)

#### Create a Manufacturer

```http
  POST http://localhost:8100/api/models/
```
```python
{
  "name": "Mercedes-Benz"
}
```
### Frontend Example
```http
  http://localhost:3000/manufacturers/new/
```


![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/57598e82396ed3c4b843cb686d0f8ada.png)

#### Get a specific manufacturer
```http
  GET http://localhost:8100/api/manufacturers/:id/
```
```python
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "Porsche"
}
```

#### Update a specific manufacturer
```http
  PUT http://localhost:8100/api/manufacturers/:id/
```
```python
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "BMW"
}
```

#### Delete a specific manufacturer
```http
  DELETE http://localhost:8100/api/manufacturers/:id/
```
```python
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "BMW"
}
```

----
#### List vehicle models

```http
  GET http://localhost:8100/api/models/
```
```python
{
	{
	"models": [
		{
			"href": "/api/models/1/",
			"id": 1,
			"name": "911 GT3 with Touring Package",
			"picture_url": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1626169390/autoexpress/2021/07/Porsche%20911%20GT3%20Touring%20Package-2.jpg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Porsche"
			}
		},
}
```

### Frontend Example
```http
  http://localhost:3000/models
```
![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/0010d6220d87edcc852120ec1d98fdbe.png)

#### Create a vehicle model

```http
  POST http://localhost:8100/api/models/
```
```python
{
    "name": "GT4 RS",
    "picture_url": "https://www.motortrend.com/uploads/sites/5/2020/07/Delta4x4_Porsche_911_Dakar-5.jpg",
    "manufacturer_id": 1
}

```
### Frontend Example
```http
  http://localhost:3000/models/new/
```
![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/450d7a0749f87c96b305e4b56dfc312b.png)

#### Get a specific vehicle model
```http
  GET http://localhost:8100/api/models/:id/
```
```python
{
	"href": "/api/models/2/",
	"id": 2,
	"name": "Rav4 XSE",
	"picture_url": "https://www.leithtoyota.com/assets/stock/colormatched_01/transparent/1280/cc_2023tos20_01_1280/cc_2023tos200017_01_1280_2qz.png?height=400&bg-color=FFFFFF",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "Toyota"
	}
}
```

#### Update a specific vehicle model
```http
  PUT http://localhost:8100/api/models/:id/
```
```python
{
    "name": "NSX",
    "picture_url": "https://1cars.org/wp-content/uploads/2016/01/Acura-NSX-1.jpg",
    "manufacturer_id": 4
}

```

#### Delete a specific vehicle model
```http
  DELETE http://localhost:8100/api/models/:id/
```
```python
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "BMW"
}
```
---
#### List automobiles

```http
  GET http://localhost:8100/api/automobiles/
```
```python
{
	{
	"autos": [
		{
			"href": "/api/automobiles/1HGCG6673YA116994/",
			"id": 1,
			"color": "White",
			"year": 2023,
			"vin": "1HGCG6673YA116994",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "911 GT3 with Touring Package",
				"picture_url": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1626169390/autoexpress/2021/07/Porsche%20911%20GT3%20Touring%20Package-2.jpg",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Porsche"
				}
			}
		},
}
```
### Frontend Example
```http
  http://localhost:3000/autos
```

![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/751b6ae3f9d57945e8f73d441604f35e.png)

#### Create an automobile

```http
  POST http://localhost:8100/api/automobiles/
```
```python
{
  "color": "Green",
  "year": 2023,
  "vin": "1N4AL3AP6FC121170",
	"model_id": 8
}

```
### Frontend Example
```http
  http://localhost:3000/autos/new/
```
![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/498ceff77ef57d2e21113be0044a2a99.png)

#### Get a specific automobile
```http
  GET http://localhost:8100/api/automobiles/:vin/
```
```python
{
{
	"href": "/api/automobiles/1HGCG6673YA116994/",
	"id": 1,
	"color": "White",
	"year": 2023,
	"vin": "1HGCG6673YA116994",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "911 GT3 with Touring Package",
		"picture_url": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1626169390/autoexpress/2021/07/Porsche%20911%20GT3%20Touring%20Package-2.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Porsche"
		}
	}
}
}
```

#### Update a specific automobile
```http
  PUT http://localhost:8100/api/automobiles/:vin/
```
```python
{
  {
	"href": "/api/automobiles/1HGCG6673YA116994/",
	"id": 2,
	"color": "white",
	"year": 2023,
	"vin": "1HGCG6673YA116994",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "Supra",
		"picture_url": "https://1cars.org/wp-content/uploads/2016/01/Acura-NSX-1.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/4/",
			"id": 4,
			"name": "Toyota"
		}
	}
}
}

```

#### Delete a specific automobile
```http
  DELETE http://localhost:8100/api/automobiles/:vin/
```
```python
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "BMW"
}
```

-----
## Automobile Service


The service microservice has three models: (1)AutomobileVO, (2)Technician, and (3)Appointment.

    (1) The AutomobileVO model contains the vin field which allows us to grab the Inventory microservice's vin. The AutomobileVO is a value object in our service microservice.
    (2) The Technician model contains name and employee_id fields.
    (3) The Appointment model contains the vin foreign key that we associate with the Automobile model, name of customer, date_time, reason for appointment, technician foreign key that we associate with technician model, vip customer boolean field, and a finished field.

With those models, I created RESTful APIs views that would:

    (1) "GET" the list of all existings appointments, technicans, and automobilesVO.
    (2) "POST" or create each an appointment, technician, or automobileVO.
    (3) "DELETE" any of the following above by grabbing it's unique id.

I integrated my microservice with the inventory microservice by polling for the automobile's data from the inventory API.

I then created the front-end portion for my microservice by building react components to fetch the list of specific data from my database, a form to create a new service appointment and technician, and also a way to cancel or finish an appointment after service.

I also implemented a way to search for a VIN number for a customer which filters through the list of the database and gets the specific appointment information by the unique VIN number.

In summary: The back-end portion of microservice which contains the RESTful APIs is used in the front-end application with React to create an automobile service which allows a person to enter a technicians information and displays the new information in a list of existing technicians, create an new appointment and display the new appointment in a list of unfinished appointments, and a way to filter out a specific appointment by entering the unique VIN number.

### Enter a technician

```http
  POST http:/localhost:8080/technicians/
```
```python
{
    {
        "name": "Jon",
        "employee_id": 1
    }
}
```

### List technicians

```http
  GET http:/localhost:8080/technicians/
```
```python
{
    {
	"technicians": [
		{
			"id": 1,
			"name": "Rando",
			"employee_id": 1
		},
		{
			"id": 2,
			"name": "Jon",
			"employee_id": 1
		}
	]
}
}
```

### Enter a service appointment

```http
  POST http://localhost:8080/api/appointments/
```
```python
{
    {
        "vin": "1N6SD16S5VC411716",
        "name": "Rando",
        "date_time": "2023-03-10T12:55:00+00:00",
        "reason": "Oil Change",
        "technician": 1,
        "vip": "True",
        "finished": "False"
    }
}
```

### List of appointments

```http
  GET http://localhost:8080/api/appointments/
```
```python
{
    {
	"appointments": [
		{
			"vin": {
				"id": 3,
				"vin": "1N6SD16S5VC411716"
			},
			"name": "Rando",
			"date_time": "2023-03-10T12:55:00+00:00",
			"reason": "Oil Change",
			"technician": {
				"id": 1,
				"name": "Rando",
				"employee_id": 1
			},
			"vip": false,
			"finished": false,
			"id": 3
		},
}
```
### Frontend Example
```http
  http://localhost:3000/appointments
```

![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/1f3b5ed89c9213264f8478a3bebd4b57.png)


### Service history

```http
  GET http://localhost:8080/api/appointments/
```
```python
{
    {
	"appointments": [
		{
			"vin": {
				"id": 3,
				"vin": "1N6SD16S5VC411716"
			},
			"name": "Rando",
			"date_time": "2023-03-10T12:55:00+00:00",
			"reason": "Oil Change",
			"technician": {
				"id": 1,
				"name": "Rando",
				"employee_id": 1
			},
			"vip": false,
			"finished": false,
			"id": 3
		},
}
```
### Frontend Example
```http
  http://localhost:3000/servicehistory
```

![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/1f3b5ed89c9213264f8478a3bebd4b57.png)

----
# Auto Sales

The Auto Sales microservice is designed to track automobile sales in the inventory and create a comprehensive record of each sale. The front-end of the application includes four main features: adding a sales person, adding a potential customer, creating a sale record, and listing all sales.

To add a sales person, a form is created to input the name and employee number of the sales person. When submitted, the sales person is created in the application. Similarly, to add a potential customer, a form is created to input the name, address, and phone number of the customer, which is then stored in the application.

The creation of a sale record involves associating an unsold automobile from the inventory, a sales person, and a customer with a price to record the sale. A form is created for this purpose, and the sales record is stored in the application upon submission.

To list all sales, a page is created that displays the name and employee number of the sales person, the purchaser's name, the automobile VIN, and the price of the sale. A link to this page is provided in the navbar.

Finally, to list a sales person's sales history, a page is created with a dropdown menu that allows a user to select a sales person. Upon selection, all sales associated with that sales person are fetched and displayed, including the sales person, the customer, the automobile VIN, and the price of the sale. A link to this page is also provided in the navbar.

The Auto Sales microservice is a key component of the Car Dealership Web Application as it provides the functionality to manage sales-related activities. When integrated with the Car Dealership Web Application, the Auto Sales microservice enables dealership staff to add and manage sales personnel, potential customers, and sales records.

To add a sales person or potential customer, dealership staff can access the respective forms through links in the navbar. Upon submission, the relevant data is stored in the Auto Sales microservice and can be accessed through the list of sales page or the sales person's sales history page.

When creating a sale record, the Auto Sales microservice verifies that the automobile being sold is listed in the inventory and has not been sold previously. This ensures that accurate sales records are maintained.

The list of all sales page and the sales person's sales history page both display important information regarding sales, including the sales person's name and employee number, the purchaser's name and contact details, the automobile VIN, and the price of the sale. This information can be used by dealership staff to track sales performance and identify potential opportunities for improvement.

Overall, the integration of the Auto Sales microservice with the Car Dealership Web Application provides a comprehensive platform for managing all aspects of an automobile dealership, from inventory management to sales and service appointments.

### Add a sales person
```http
  POST http://localhost:8080/api/appointments/
```
```python
	{
			"name": "Daniel",
			"employee_number": 2
	}
```

### Add a customer
```http
  POST http://localhost:8090/api/customers/
```
```python
{
    {
	"name": "Gohan",
	"address": "100 Profile Blvd Queens NY 11373",
	"phone": "2125667834"

	}
}
```

### Create a sale record
```http
  GET http://localhost:8090/api/salesrecords/
```
```python
{
    {
	"name": "Gohan",
	"address": "100 Profile Blvd Queens NY 11373",
	"phone": "2125667834"

	}
}
```
### Frontend Example
```http
  http://localhost:3000/salesrecord/add/
```



![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/e75c8ea55438a514e80dbb87c426d0fd.png)

### List all sales
```http
  GET http://localhost:8090/api/salesrecords/
```
```python
{
    {
	"sales_record": [
		{
			"id": 1,
			"price": 65000,
			"salesperson": {
				"id": 1,
				"name": "Farzan",
				"employee_number": 1
			},
			"customer": "Gary",
			"automobile": "1HGCG6673YA116994"
		},

}
```

### List a sales person's sales history
```http
  GET http://localhost:8090/api/salesemployee/{id}/
```
```python
{
    {
	"salesrecord": [
		{
			"id": 1,
			"price": 65000,
			"salesperson": {
				"id": 1,
				"name": "Farzan",
				"employee_number": 1
			},
			"customer": "Gary",
			"automobile": "1HGCG6673YA116994"
		},
		{
			"id": 9,
			"price": 223000,
			"salesperson": {
				"id": 1,
				"name": "Farzan",
				"employee_number": 1
			},
			"customer": "Gohan",
			"automobile": "1FM5K8D89DGA76467"
		},
}
```
### Frontend Example
```http
  http://localhost:3000/salesemployee/
```

![App Screenshot](https://s3.us-west-2.amazonaws.com/forge-production.galvanize.com/content/25d9b9d830130494f71a402d2ad46d3b.png)
