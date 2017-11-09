# Requirements Document

## 1 Introduction
I created the website, which is simple social network.
The name of this social network is “The Wall”.

## 2 User Requirements

### 2.1 Software Interfaces

#### Used technologies:
*	React JS, Redux, Twitter Bootstrab, HTML, CSS on the front-end
*	Javascript, specially Node JS and Express JS on the backend
*	MySQL db to store all the information
*	Webpack is a building tool that puts all of my assets, including JavaScript, images, fonts, and CSS, in a dependency graph

*	Backend of system must be implemented using Node JS of version upper than 6.0.0 and Express JS of version upper than 4.0.0
*	Frontend of the system must be implemented using CSS framework Twitter Bootstrap of version upper than 3.0.0 and React  of version upper than 15.0.0.
*	Database must be implemented using Sequelize for MySQL of version upper than 4.0.0.

### 2.2 User Interfaces

User interface will provide signing up, loging in, editing profile information, creating new posts  and editing them, also deleting posts, commenting on other people's posts.

Each view is represented in mockups.

2.2.1 Navigation bar with sections for guest and  unauthorized  user:
*	Home
*	About wall
*	Search
*	Sign in
*	Sign up

2.2.2 Navigation bar with sections for authorized  user:
*	Home
*	About wall
*	Search
*	User (dropdown button)

2.2.3 Footer will have two sections:
*	About us
*	Contact us

2.2.4 On the “Home” page users will see the latest posts of people whose account is public.

2.2.5 “About Wall” page will contain information about this project.

### 2.3 User Characteristics
This web application can be suitable for any active user of the Internet and personal сomputer, which would like to share their thoughts with others or just save it for yourself.

### 2.4 Assumptions and Dependencies
 * Easy extensibility and changeability of content.
 * It is possible that frequently used library can not work in the old browser, and excellent display application from mockups ,because more appropriate solutions can occur.
 * It is also needed the presence of the Internet to provide the proper operation of application.

## 3 System Requirements
 To use this application, you need a device with Internet access and latest web browser installed. Recommended browsers:
 *	Google Chrome
 *	Mozilla Firefox
 *	Safari
 *	Yandex-Browser

### 3.1 Functional Requirements
Each view is represented in mockups.

* The application will contain 2 roles: user, guest.
####	User can:
1.	Create his own ‘wall’ with some post
2.	Edit profile information and change profile’s photo
3.	Add photos to posts
4.	Make his account private
5.	Comment on other people’s posts.

* Guest is allowed to look through other people’s posts and to read some information about this website.
* User can sign up, log in, edit profile information, creat new posts  and edit them, also deletposts, commenton other people's posts.
* To search users’ accounts will be possible by login, name, surname, title of post.

### 3.2 Non-Functional Requirements
#### 3.2.1 Software quality attributes
* Responsive Design - content must be readable on mobile, tablet and desktop devices.
* Performance - people don't want to wait much time while web page is loading. To avoid wasting time user must wait at maximum 1 second to load any page on web app.

