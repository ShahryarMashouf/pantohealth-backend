# PANTOhealth Backend Developer Technical Assessment

## **Introduction**
این پروژه یک سیستم مدیریت داده برای دستگاه‌های IoT است که داده‌های اشعه ایکس را پردازش و ذخیره می‌کند. این پروژه با استفاده از فریم‌ورک NestJS و RabbitMQ توسعه یافته و دارای APIهایی برای دریافت، ذخیره‌سازی و تحلیل داده‌های دریافتی است.

---

## **Project Structure**
- **src/**: شامل تمام ماژول‌ها، کنترلرها و سرویس‌های پروژه
- **RabbitMQ Module:** مدیریت صف‌ها و مصرف داده‌های اشعه ایکس
- **MongoDB Integration:** ذخیره اطلاعات پردازش‌شده
- **API Endpoints:** CRUD برای داده‌ها
- **Swagger Integration:** مستندات API

---

## **Features**
- مصرف داده از دستگاه‌های IoT از طریق RabbitMQ
- ذخیره‌سازی داده‌ها در پایگاه داده MongoDB
- پردازش داده‌ها شامل محاسبه حجم و طول داده‌ها
- APIهای RESTful برای عملیات CRUD
- مستندات API با Swagger

---

## **Technologies Used**
- [NestJS](https://nestjs.com)  
- [MongoDB](https://www.mongodb.com)  
- [RabbitMQ](https://www.rabbitmq.com)  
- [Swagger](https://swagger.io)  

---

## **Prerequisites**
قبل از اجرای پروژه نیاز به نصب نرم‌افزارهای زیر دارید:
- **Node.js:** [لینک دانلود](https://nodejs.org/)  
- **Docker:** [لینک دانلود](https://www.docker.com/products/docker-desktop)  

---

## **Installation**
### **1. Clone the repository**
```bash
git clone <REPO_URL>
cd pantohealth-backend
