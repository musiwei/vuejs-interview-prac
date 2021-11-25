# Vue.js - interview practical

## Instructions

We have set up this new Laravel project to act as the back-end. A "products" table _migration_ and Product _model_ have been added. For this work, feel free to use the Product model or plain SQL queries.

Please refer to [https://laravel.com/docs/8.x/installation](https://laravel.com/docs/8.x/installation) for more details on setting up a Laravel project. If you're stuck, feel free to also let us know and we'll help you out.

- Clone this repo and perform the tasks below.
- You can perform the tasks in any order.
- Use VueJS v3, with a Vuex for the store - and use NPM to install packages.
- Please make the layout look respectable (you can use CDNs to bring in 3rd party CSS frameworks if you like - Tailwind is a bonus).
- Feel free to add any other niceties for the _user experience_.
- ***Please commit your changes and create a pull-request,  or send a link.***

## Task
- Create a basic form for adding a new product. Include an input field & submit button. A product only needs a name.
- When submitted, save the new product to the database via an API call (you can put the Laravel API code inside `routes/api.php` directly).
- List all products below the form, via an API call.
- Have a search field that will filter the listed entries.
