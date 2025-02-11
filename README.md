# PANTOhealth Backend Developer Technical Assessment

## **Introduction**
This project is an IoT data management system designed to process and store x-ray data from IoT devices. It is developed using the NestJS framework and RabbitMQ, providing APIs for data ingestion, storage, and analysis.

---

## **Project Structure**
- **src/**: Contains all modules, controllers, and services of the project
- **RabbitMQ Module:** Manages message queues and consumes x-ray data
- **MongoDB Integration:** Stores processed data
- **API Endpoints:** CRUD operations for x-ray data
- **Swagger Integration:** API documentation

---

## **Features**
- Consume x-ray data from IoT devices via RabbitMQ  
- Store data in MongoDB  
- Process data to compute length and volume parameters  
- RESTful APIs for CRUD operations  
- Swagger-based API documentation  

---

## **Technologies Used**
- [NestJS](https://nestjs.com)  
- [MongoDB](https://www.mongodb.com)  
- [RabbitMQ](https://www.rabbitmq.com)  
- [Swagger](https://swagger.io)  

---

## **Prerequisites**
Ensure the following tools are installed before running the project:
- **Node.js:** [Download Link](https://nodejs.org/)  
- **Docker:** [Download Link](https://www.docker.com/products/docker-desktop)  

---

## **Installation**

### **1. Clone the repository**
```bash
git clone <REPO_URL>
cd pantohealth-backend



##  2. Install dependencies 
npm install

##  3. Run RabbitMQ
docker run -d --name rabbitmq -p 5672 -p 1562:15672 rabbitmq:3-management

##  4. Run MongoDB
docker run -d --name mongodb -p 27017:27017 mongo

##  5. Start the application
npm run start


**API Endpoints
Base URL:
http://localhost:3000

**Available Endpoints:
/xrays	POST	
/xrays	GET
/xrays/:id  DELETE	

** Sample Request Body (POST /xrays)

{
  "deviceId": "66bb584d4ae73e488c30a072",
  "time": 1735683480000,
  "dataLength": 3,
  "dataVolume": 15.5
}


** Testing with Swagger
http://localhost:3000/api

** Docker Setup
1. Build and Run with Docker Compose: 
docker-compose up --build

2. Services in Docker Compose

Service   Port
          
RabbitMQ	5672/15672
MongoDB	  27017
App	      000