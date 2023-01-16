# Stratify
an eCommerce platform designed for multi-vendor use with strategic shopping in mind.

## Introduction
---

Stratify is a full-stack web application that uses a React-Redux client framework in tandem with a Ruby on Rails server-side framework and takes advantage of PostgreSQL as its relational database. The primary focus of Stratify is to display how user experience with a shopping platform has an effect on the relationship between the front-end client and back-end models.

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

The client launches with the Home page and the option to log in with a username and password.

![login image](https://github.com/Huntysaurus/stratify-app/blob/main/images/login%20screen.jpg)

To create a user, you must click the text below to navigate to the Sign Up page.

![signup image](https://github.com/Huntysaurus/stratify-app/blob/main/images/sign%20up.jpg)

Fill in the information to sign up and create a user.

* There are several validations in place you must follow in order to create a user, otherwise error messages regarding the validations will appear to the right of the Sign Up form.

![signup image](https://github.com/Huntysaurus/stratify-app/blob/main/images/profile%20page.png)

After signing up, you are immediately navigated to the profile page where your user information is displayed. On the profile page, you have the option to:

* View your name, username, list of created orders, and list of created product reviews.
    * you may also delete any created reviews from this page.

* Change your username and password, which will cause teh page to refresh upon submitting.

* Delete your account.

The shopping cart icon will remain in the upper right hand corner of DOM when logged in, and will always be interactable.

Use the menu in the upper left corner of the DOM to navigate throughout the application.

![signup image](https://github.com/Huntysaurus/stratify-app/blob/main/images/shop%20page.png)

On the shop page, all vendor products that are not in other users' carts will appear on the DOM with the ability to 'add to cart' by clicking the blue plus icon. Once added, products will disappear from the product page. The cart keeps a running count of products added, as well as a running total.

Other functionality of the Shop page:

* You can use the filter-by-vendor option to show only products that belong to specific vendors.

* You can search for specific products by name in the search bar.

Click the cart icon to open the cart and view all current products added along with the total cost of all products. You can remove products in the cart as well and they will appear back on the shop Page. 

You can click on the product-image itself in the shop page to navigate to the Product Detail page.

![signup image](https://github.com/Huntysaurus/stratify-app/blob/main/images/product%20detail.png)

On the Product Detail page:
 
* you have the ability to add the product to the cart here as well, re-rendering the Product Detail to show that it is currently in the cart.

* you can click on the review button to post a review, with the option to leave a rating, which will immediately render onto the DOM in the list of reviews to the right of the product.
    * you have the option to delete reviews you have created on the product reviews list. Reviews you have created will also appear on the Profile page reviews list, where you have the option to delete them as well.

Clicking the checkout button on inside the cart will first prompt a confirmation. Clicking yes will generate an order and navigate back to the profile page where you can review your freshly created order with a total and breakdown of products.

![signup image](https://github.com/Huntysaurus/stratify-app/blob/main/images/cart%20icon.png)

* You won't be able to checkout without any products in the cart.

To logout, simply choose the option in the menu.

* Your cart will hold items that haven't been checked out whether logged in or not, picking right back up from where you left off next time you log in.

## Project Status

Current Models

* cart_item
* cart
* order_item
* order
* product
* review
* user
* vendor

Potential updates for Stratify include the following:

* A credit_card model which belongs_to a user. Users will be able to checkout with a credit card stored in their profile. Users can create, update and remove credit cards on their profile page.
---
* The shop page will have a high-rated products list appear to left of the main shop list component where users will also have the ability to purchase products as well.

    * The shop page will also have a suggested products list to the right of the main shop list component which will offer products based on the current user's shopping habits.
---
* The shop page will offer more filters, such as by rating, popularity, category and more.
---

* Vendors will have their own dedicated page that can be navigated to either from the shop page or the product detail page. The page will contain a more detailed description including Vendor specialty and owned products.
---
* users can have more than one of the same product in their cart at the same time. The products model will also contain an inventory count column which gets updated after products are purchased.

# Contributing
There is still much in store for this project and, over time, I will make add new features or changes. That being said, I'm open to seeing what others would like to do with this project. Always open to constructive criticism and making new coding connections as well!

* Fork to your local environment
* Create changes:
```
git checkout -b my-creation
```
* commit your changes:
```
git commit -am 'add a feature'
```
* push changes to the branch:
```
git push origin 'my-new-feature'
```
* submit a pull request

## History

version 0.1 (2022-12-07) - Fully functional full-stack application

### External Content Sources

* Seed data used in the seed.rb file provided by the faker ruby gem.  
https://github.com/faker-ruby/faker

* Animated present gif provided by giffycat.  
https://gfycat.com/ablepassionateanemoneshrimp

* Image data for product images provided by getty images.  
https://www.gettyimages.com/

* Shopping cart icon provided by Vecteezy.   
https://www.vecteezy.com/
