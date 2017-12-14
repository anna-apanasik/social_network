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

User interface will provide signing up, loging in, editing profile information, creating new posts  and editing them, also deleting posts.

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

Each view is represented in mockups.

### 2.3 User Characteristics
This web application can be suitable for any active user of the Internet and personal сomputer, which would like to share their thoughts with others or just save it for yourself.

### 2.4 Assumptions and Dependencies
 * It is possible that frequently used library can not work in the old browser, and excellent display application from mockups ,because more appropriate solutions can occur.
 * It is also needed the presence of the Internet to provide the proper operation of application.

## 3 System Requirements
 To use this application, you need a device with Internet access and latest web browser installed. Recommended browsers:
 *	Google Chrome
 *	Mozilla Firefox
 *	Safari
 *	Yandex-Browser

### 3.1 Functional Requirements
 The application will contain 2 roles: user, guest.

####	User can:
1. Sign up and sign in;
2. Create new post;
4.	Add photos to post;
5.	Edit post;
6. Delete post;
7. Edit profile information and change profile’s photo;
8.	Make account private;
9. Search users’ by login, name, surname, title of post.
10. Read information about this website;
11. Look through other user's posts;
12. Look through other user's pages.

####	Guest can:
1. Sign up;
2. Search users’ by login, name, surname, title of post;
3. Read information about this website;
4. Look through other user's posts;
5. Look through other user's pages. 

### 3.2 Non-Functional Requirements
#### 3.2.1 Software quality attributes
* Responsive Design - content must be readable on mobile, tablet and desktop devices.
* Performance. To avoid wasting time user must wait at maximum 1 second to load any page on web app.
* Size of script will be less then 1 Mb.

#### 3.2.2 External interfaces
User monitor should support resolution at least 620 х 769 .

