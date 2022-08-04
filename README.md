# Food-delivery-webapp



*A Mini Project Report on*

**Online Food Ordering System**

*As a part of the course*

**IT254 : Web Technologies and Applications (minor)**

*undergone at*

**Department of IT, NITK Surathkal**

*under the guidance of*

**Dr. Sowmya Kamath**

**Ms. Thanmayee**

*Submitted by*

**Saransh Bhaduka 191ME175**

**Sumanth N Hegde 191ME284**

**V Sem B.Tech**

**Department of Information Technology**

**National Institute of Technology Karnataka, Surathkal**.

***Dec 2021***

**1 |** P a g e





**DECLARATION BY THE STUDENT**

We, **Saransh Bhaduka and Sumanth N Hegde,** hereby declare that the project entitled

“**Online Food Ordering System**” was carried out by us during the odd term of the

academic year 2021 – 2022. We declare that this is our original work and has been

completed successfully according to the direction of our guide **Dr. Sowmya Kamath, Ms.**

**Thanmayee** and as per the specifications of NITK Surathkal.

Place: NITK, Surathkal

Date: 24/11/2021

Saransh Bhaduka

(Signature of the Student)

Sumanth N Hegde

(Signature of the Student)

**2 |** P a g e





**ABSTRACT**

The Food Industry has always been a profitable industry for manufacturers, suppliers,

and users and distributors. We have developed an online food ordering system, and its

purpose is to automate the existing manual system with the help of current-generation

technology and full-fledged computer software so that the valuable data of our

customers can be stored in a way that makes it easy to access and manipulate the data.

Through our proposed system, food can be ordered online from restaurants in a hassle-

free manner. Our system allows the customers to select the desired food items from the

displayed menu with a simple mouse click. For more secure ordering, necessary hashing

algorithms have been used to maintain data privacy. Customer care is made available

so that the queries of the users can be addressed. Once the customer orders the food, he

can make payment either online or after the delivery, and he gets the estimated date of

delivery of food.

The Online Food Ordering System, as described above, can lead to an error free,

reliable, secure, and fast management system. It can help the agency to focus on other

tasks instead of focusing on keeping records. An organization can store computer

records without redundant entries, and so, it will help in better utilization of the

resources. That means that one need not be distracted by information that is irrelevant

while being able to reach the information.

**3 |** P a g e





**CONTENTS**

[**1**](#br6)

[**2**](#br7)

[**INTRODUCTION**](#br6)[** ](#br6)[............................................................................................................6**](#br6)

[**REQUIREMENT**](#br7)[** ](#br7)[ANALYSIS**](#br7)[** ](#br7)[........................................................................................7**](#br7)

[**2.1**](#br7)[** ](#br7)[FUNCTIONAL**](#br7)[** ](#br7)[REQUIREMENTS........................................................................7**](#br7)

[**2.2**](#br8)[** ](#br8)[NON-FUNCTIONAL**](#br8)[** ](#br8)[REQUIREMENTS..............................................................8**](#br8)

[**SYSTEM**](#br8)[** ](#br8)[DESIGN**](#br8)[** ](#br8)[...........................................................................................................8**](#br8)

[**3.1**](#br8)[** ](#br8)[DESIGN**](#br8)[** ](#br8)[GOALS**](#br8)[** ](#br8)[......................................................................................................8**](#br8)

[**3.2**](#br9)[** ](#br9)[SYSTEM**](#br9)[** ](#br9)[ARCHITECHTURE................................................................................9**](#br9)

[**3.3**](#br9)[** ](#br9)[TOOLS**](#br9)[** ](#br9)[USED**](#br9)[** ](#br9)[...........................................................................................................9**](#br9)

[**WORK**](#br10)[** ](#br10)[DONE.................................................................................................................10**](#br10)

[**CONCLUSION**](#br15)[** ](#br15)[AND**](#br15)[** ](#br15)[FUTURE**](#br15)[** ](#br15)[WORK......................................................................15**](#br15)

[**REFERENCES**](#br15)[** ](#br15)[...............................................................................................................15**](#br15)

[**PROJECT**](#br15)[** ](#br15)[SOURCE**](#br15)[** ](#br15)[CODE**](#br15)[** ](#br15)[.........................................................................................15**](#br15)

[**3**](#br8)

[**4**](#br10)

[**5**](#br15)

[**6**](#br15)

[**7**](#br15)

**4 |** P a g e





**LIST OF FIGURES**

[**Figure**](#br7)[** ](#br7)[2-1:**](#br7)[** ](#br7)[Web**](#br7)[** ](#br7)[Application**](#br7)[** ](#br7)[Modules...................................................................................7**](#br7)

[**Figure**](#br9)[** ](#br9)[3-1:**](#br9)[** ](#br9)[MVC**](#br9)[** ](#br9)[Architechture.............................................................................................9**](#br9)

[**Figure**](#br10)[** ](#br10)[4-1:**](#br10)[** ](#br10)[User**](#br10)[** ](#br10)[Registration**](#br10)[** ](#br10)[Page**](#br10)[** ](#br10)[......................................................................................10**](#br10)

[**Figure**](#br10)[** ](#br10)[4-2:**](#br10)[** ](#br10)[Registration**](#br10)[** ](#br10)[Confirmation**](#br10)[** ](#br10)[Mail**](#br10)[** ](#br10)[Sent**](#br10)[** ](#br10)[To**](#br10)[** ](#br10)[User................................................10**](#br10)

[**Figure**](#br11)[** ](#br11)[4-3:**](#br11)[** ](#br11)[User**](#br11)[** ](#br11)[Login**](#br11)[** ](#br11)[Page**](#br11)[** ](#br11)[.................................................................................................11**](#br11)

[**Figure**](#br11)[** ](#br11)[4-4:**](#br11)[** ](#br11)[Naviagation**](#br11)[** ](#br11)[Menu**](#br11)[** ](#br11)[And**](#br11)[** ](#br11)[Real**](#br11)[** ](#br11)[Time**](#br11)[** ](#br11)[Chat**](#br11)[** ](#br11)[Feature**](#br11)[** ](#br11)[...........................................11**](#br11)

[**Figure**](#br11)[** ](#br11)[4-5:**](#br11)[** ](#br11)[Homepage**](#br11)[** ](#br11)[...........................................................................................................11**](#br11)

[**Figure**](#br12)[** ](#br12)[4-6:**](#br12)[** ](#br12)[Searching**](#br12)[** ](#br12)[Food...................................................................................................12**](#br12)

[**Figure**](#br12)[** ](#br12)[4-7:**](#br12)[** ](#br12)[Adding**](#br12)[** ](#br12)[Food**](#br12)[** ](#br12)[To**](#br12)[** ](#br12)[Cart.........................................................................................12**](#br12)

[**Figure**](#br12)[** ](#br12)[4-8:**](#br12)[** ](#br12)[Shopping**](#br12)[** ](#br12)[Cart**](#br12)[** ](#br12)[....................................................................................................12**](#br12)

[**Figure**](#br13)[** ](#br13)[4-9:**](#br13)[** ](#br13)[Payment**](#br13)[** ](#br13)[Gateway**](#br13)[** ](#br13)[..............................................................................................13**](#br13)

[**Figure**](#br13)[** ](#br13)[4-10:**](#br13)[** ](#br13)[User**](#br13)[** ](#br13)[Data**](#br13)[** ](#br13)[Stored**](#br13)[** ](#br13)[In**](#br13)[** ](#br13)[MongoDB.......................................................................13**](#br13)

[**Figure**](#br13)[** ](#br13)[4-11:**](#br13)[** ](#br13)[List**](#br13)[** ](#br13)[Of**](#br13)[** ](#br13)[Foods**](#br13)[** ](#br13)[Ordered**](#br13)[** ](#br13)[By**](#br13)[** ](#br13)[User**](#br13)[** ](#br13)[Stored**](#br13)[** ](#br13)[In**](#br13)[** ](#br13)[MongoDB**](#br13)[** ](#br13)[..................................13**](#br13)

[**Figure**](#br14)[** ](#br14)[4-12:**](#br14)[** ](#br14)[About**](#br14)[** ](#br14)[Us**](#br14)[** ](#br14)[Page**](#br14)[** ](#br14)[..................................................................................................14**](#br14)

[**Figure**](#br15)[** ](#br15)[4-13:**](#br15)[** ](#br15)[Live**](#br15)[** ](#br15)[Tracking**](#br15)[** ](#br15)[Of**](#br15)[** ](#br15)[Orders.................................................................................15**](#br15)

**5 |** P a g e





**1 INTRODUCTION**

Computers have become a part of life for accessing almost any kind of information. Life in the

21st century is full of technological advances, and in this age of technology, it is increasingly

difficult for any organization to survive without the use of technology. The World Wide Web

is a major contributor to the growing global knowledge base. It can also be used as a way to

share information within a business.

Traditionally, people had to make phone calls to place orders or drive to restaurants to get out

and then wait for food to be prepared and delivered. Until recently, all of these delivery orders

were placed over the phone, but there were many flaws in the system, including a customer

interruption that required a visible copy of the menu, a lack of physical assurance that the order

was placed. Properly, as well as the need for the restaurant to have a staff member answering

the phone and taking orders. Storing important information in files and manuals is fraught with

risks and tedious processes. Obviously, these are not the best solutions for ordering food in

restaurants, especially for people living busy lives.

The demand for online food delivery modes is proliferating, especially in times of the COVID-

19 crisis. During COVID-19, minimal contact helps protect customers, employees, and the

general public from the spread of the virus. Online food ordering allows customers to place an

order almost anytime, anywhere, saving time and resources usually spent traveling to pick up

food.

Our website has a registration and login module. The products and services offered will provide

customers with all the different categories of products available to choose from and to choose

from. Based on user preferences, they can search for a food name and add it to a cart. A real-

time chat has been enabled wherein the users can contact our officials in case of any queries

and complaints. Once the user adds the food to the cart, he is redirected to a secure payment

gateway. When the payment is made, the user gets the estimated delivery date based on his

location. Our online food order system gives customers luxury as it overcomes the problems

of the regular queuing system. Therefore, this application improves the speed of orders to

customers and provides a better communication platform to get their queries addressed.

This also greatly reduces the burden on the end of the restaurant, as the whole process of

ordering is automatic. Once an order has been placed on a web page, it is placed on a website

and received, in real-time, via a desktop program at the end of the restaurant. Within this

application, all items in the order are displayed, along with their corresponding options and

delivery details, in a concise and easy-to-read format. This allows restaurant staff to quickly

pass orders as they are placed and produce the necessary items with minimal delay and

confusion.

**6 |** P a g e





**2 REQUIREMENT ANALYSIS**

**2.1 FUNCTIONAL REQUIREMENTS**

Functional requirements define the capabilities and functions that a system must be able to

perform successfully. Some of the functional requirements of our system are mentioned below:

Figure 2-1: Web Application Modules

Web Ordering System

➢ Enable the customer to create an account and log in to the system using user id and

password. Confirmational email is sent to user after registration.

➢ The products menu offered would provide the customers with all the different

categories of available products that they can choose and select from. Customers

can add or delete food items in an order.

➢ A one to one real-time chat feature with our customer care is enabled where the

queries and compliants of the users gets addressed.

➢ The system shall prompt the customer to confirm the meal order and provide visual

confirmation of the order placement.

➢ Payment can be made either online or after delivery of food. Once the food is

ordered, the user gets the estimated delivery date.

Menu Management System

➢ Enable the manager to view, create, edit, delete food category photos, prices and

descriptions.

➢ The system shall allow the generation of sales reports for the orders made.

Order Retrieval System

➢ Retrieve new orders from the database and display them in an easily readable and

graphical way.

**7 |** P a g e





**2.2 NON-FUNCTIONAL REQUIREMENTS**

A non-functional requirement is a requirement that specifies criteria that can be used to judge

the operation of a system, rather than specific behaviors. Some of the non-functional

requirements of our system are mentioned below:

➢ Availability - Our system is available at all times, meaning the user can access it using

a web browser, only restricted by the downtime of the server.

➢ Data security - Our system ensures that the user details are kept confidential and

necessary hashing algorithms have been used to maintain data privacy.

➢ Portability - Our system running on one platform can easily be converted to run on

another platform.

➢ Recoverability - Our system ensures that the app can recover all the data if there is a

failure in the application.

➢ Reliability - Our system behaves consistently in a user-acceptable manner when

operating within the environment for which the system was intended.

**3 SYSTEM DESIGN**

**3.1 DESIGN GOALS**

➢ One of the main objectives of our system is to ensure customer satisfaction.

Personalized listing of orders by a waiter may result in a slower response to customer

service. So, if a restaurant uses our proposed system, taking orders becomes easy and

quick by tapping the tablet and selecting the menu you want.

➢ To design a system that can accommodate a huge amount of orders at a time and ensure

correct placement of orders through visual confirmation.

➢ To improve the client-server interaction and increase the efficiency of the system by

minimizing the time of ordering.

➢ To reduce the restaurant's food wastage and increase the efficiency of the restaurant's

staff by enabling the restaurant's staff to know what food items the customers want in

advance.

➢ To increase the speed of service, sales, productivity and aim towards customer

satisfaction.

➢ To increase the level of accuracy by eliminating paperwork like payment receipts

through online transactions.

➢ To evaluate the system's performance in terms of data security, user-friendliness,

usability, and reliability.

➢ To increase efficiency and improve services provided to the customers through better

application of technology in daily operations.

**8 |** P a g e





**3.2 SYSTEM ARCHITECHTURE**

**Model View Controller**

Model View Controller, or MVC as it is called, is a software design pattern for developing web

applications. The model view controller pattern is made up of the following three components:

• Model - Low level of pattern responsible for data storage

• View - Responsible for displaying all or part of the data to the user

• Controller - Code that controls the interaction between the model and the view

MVC is popular as it separates application logic from the user interface. Here the controller

gets all application requests and works with the model to display data. The view then makes

use of the controller data to produce a response to the client. The MVC summary can be

represented as follows.

Figure 3-1: MVC Architechture

**3.3 TOOLS USED**

➢ Bcrypt - Password-hashing function and its purpose is to slowly convert a piece of input

data to a fixed-size, deterministic, and unpredictable output.

➢ Bootstrap **-** Most popular HTML, CSS, and JavaScript framework for developing

responsive, mobile-first websites.

➢ Edamam - This API provides with tools to find nutrition and diet data for generic foods,

packaged foods, and restaurant meals. In addition, it employs NLP, which allows for

the extraction of food entities from unstructured text.

➢ EmailJS - Service that allows us to send emails directly from your client-side JavaScript

code. It allows to create email template, add JavaScript SDK and start sending emails.

➢ ExpressJS - Web application framework of Node.js which provides templating engines,

integrate with databases, and sets up middlewares for logging or error handling.

**9 |** P a g e





➢ MongoDB - Open-source document database and leading NoSQL database. MongoDB

is written in C++. In MongoDB, data is stored in the form of JSON-style documents.

➢ NodeJS **-** Open-source server environment, and it runs on various platforms like

Windows, Linux, Unix, Mac OS X, etc. Node.js uses JavaScript on the server and

eliminates the waiting, and simply continues with the next request. It runs single-

threaded, non-blocking, asynchronous programming, which is very memory efficient.

➢ ReactJS - Open-source JavaScript library that is used to create user-interface for single-

page applications. Used for managing web viewing and mobile applications, React also

allows us to create reusable UI components.

➢ Stripe - API for creating a payment page in the dashboard and sharing the link with the

users to accept one-time and recurring payments.

**4 WORK DONE**

Figure 4-1: User Registration Page

Figure 4-2: Registration Confirmation Mail Sent To User

**10 |** P a g e





Figure 4-3: User Login Page

Figure 4-4: Navigation Menu And Real Time Chat Feature

Figure 4-5: Homepage

**11 |** P a g e





Figure 4-6: Searching Food

Figure 4-7: Adding Food To Cart

Figure 4-8: Shopping Cart

**12 |** P a g e





Figure 4-9: Payment Gateway

Figure 4-10: User Data Stored In MongoDB

Figure 4-11: List Of Foods Ordered By User Stored In MongoDB

**13 |** P a g e





Figure 4-12: About Us Page

**14 |** P a g e





Figure 4-13: Live Tracking Of Orders

**5 CONCLUSION AND FUTURE WORK**

The online food delivery system is the need of hour because of the recent developments in the

food industry and the increasing use of the internet. So, to conclude our website is a step in the

right direction to promote a healthy lifestyle in the digital age. It is equipped with user-friendly

features with a strong backend to support the functioning of the website. In association with

chefs and delivery services, our website has the scope of becoming a well-rounded service.

However, there is always room for improvement and innovation:

➢ The number of options on diets, recipes, meal types, etc., can be increased to cater to a

broader user base.

➢ Improvement of the search bar to be equipped with features like autocomplete of text

and suggestions and calorie searches etc.

➢ Introduction of a mobile app to increase accessibility.

**6 REFERENCES**

\1. <https://nodejs.org/en/docs/>

\2. <https://reactjs.org/docs/react-api.html>

\3. <https://devdocs.io/express/>

\4. <https://www.emailjs.com/docs/user-guide/connecting-email-services/>

\5. <https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp>

\6. <https://developer.edamam.com/edamam-docs-recipe-api>

\7. <https://stripe.com/docs/payments/accept-a-payment>

**7 PROJECT SOURCE CODE**

Link -

[https://drive.google.com/drive/folders/15DsBDymrVjync2Qzu_dQUVVDVS9nSEF4?usp=sharin](https://drive.google.com/drive/folders/15DsBDymrVjync2Qzu_dQUVVDVS9nSEF4?usp=sharing)

[g](https://drive.google.com/drive/folders/15DsBDymrVjync2Qzu_dQUVVDVS9nSEF4?usp=sharing)

**15 |** P a g e
