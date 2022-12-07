# Stratify
an eCommerce platform designed for multi-vendor use with strategic shopping in mind.

## Introduction
---

Stratify is a full-stack web application that uses a React-Redux client framework in tandem with a Ruby on Rails server-side framework. The application takes advantage of PostgreSQL as its relational database. The primary focus of Stratify is to display how user experience with a shopping platform has an effect on the relationship between the front-end client and back-end models.

---
## Technologies

* Node.js 16.5.1
* Ruby 2.7.4p191
* React 18.2.0
* PostgreSQL 1.1
* Rails 6.1.6.1
---
## Launch
To launch and use the application, run these commands in the project root folder:

```
$ bundle install

$ npm install --prefix client
```

Use this command to run the rails server on  http://localhost:3000:
```
$ rails s
```
open a separate terminal to run the front end on http://localhost:4000:

Use this command to run the client in the browser:
```
$ npm start --prefix client
```
Use this command to take advantage of the product and vendor seed data in the seeds.rb file.
```
$ rails db:seed
```
*note*: without product data the app will not function properly .

to re-seed the database simply run:
```
rails db:seed:replant
```
---
## Usage Examples

## Project Status

### Sources

getty images

faker ruby gem

https://gfycat.com/ablepassionateanemoneshrimp - present gif

https://www.vecteezy.com/ - shopping cart icon

react-redux

reactjs/toolkit