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

### 2.2 User Interfaces

User interface will provide signing up, loging in, editing profile information, creating new posts  and editing them, also deleting posts, commenting on other people's posts.
For more details see mockups.

### 2.3 User Characteristics
	The application will contain 2 roles: user, guest.
####	User can:
1.	create his own ‘wall’ with some post
2.	edit profile information and change profile’s photo
3.	add photos to posts
4.	make his account private
5.	comment on other people’s posts.

	Guest is allowed to look through other people’s posts and to read some information about this website

### 2.4 Assumptions and Dependencies
 Easy extensibility and changeability of content.

## 3 System Requirements
 To use this application, you need a device with Internet access and latest web browser installed. Recommended browsers:
 *	Google Chrome
 *	Mozilla Firefox
 *	Safari
 *	Yandex-Browser

### 3.1 Functional Requirements
Each view is represented in mockups.

3.1.1 Navigation bar with sections for guest and  unauthorized  user:
*	Home
*	About wall
*	Search
*	Sign in
*	Sign up

3.1.2 Navigation bar with sections for authorized  user:
*	Home
*	About wall
*	Search
*	User (dropdown button)

3.1.3 Footer will have two sections:
*	About us
*	Contact us

3.1.4 On the “Home” page users will see the latest posts of people whose account is public.

3.1.4 “About Wall” page will contain information about this project.

3.1.6 To search users’ accounts will be possible by login, name, surname, title of post.

### 3.2 Non-Functional Requirements
#### 3.2.1 Software quality attributes
* Responsive Design - content must be readable on mobile, tablet and desktop devices.
* Performance - people don't want to wait much time while web page is loading. To avoid wasting time user must wait at maximum 1 second to load any page on web app.

#### 3.2.3 Constraints
*	Backend of system must be implemented using Node JS of version upper than 6.0.0 and Express JS of version upper than 4.0.0
*	Frontend of the system must be implemented using CSS framework Twitter Bootstrap of version upper than 3.0.0 and React  of version upper than 15.0.0.
*	Database must be implemented using Sequelize for MySQL of version upper than 4.0.0.
