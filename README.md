# MERN Boilerplate (LITE)
A simple boilerplate for creating Web Applications involving React, Express, Node, and MongoDB

## Getting Started
1. Install [Node.js](https://nodejs.org/en/)
2. Install [MongoDB](https://docs.mongodb.com/v3.2/administration/install-community/)

    `brew install mongodb` (If you have Homebrew)

3. Copy the Project Repo into your own directory

    `git clone git@github.com:alexander-lee/MERN-boilerplate-lite.git`

4. Install all the Dependencies

    `npm install`

5. Install Gulp globally

    `npm install -global gulp-cli`

6. Start the Node Server

    `npm start` or `gulp`

## Setting up the Database
1. Create a Directory for MongoDB to live in (Create the folder data/db at your root).

    `mkdir -p /data/db`

2. Make sure your directory has the right permissions

    `chmod 0755 /data/db && sudo chown $USER /data/db`

3. Create a Database (if you didn't make one yet)

    `mongo`
    `use sampledb`

4. Add your Database to the configuration file ([config.js](https://github.com/alexander-lee/MERN-boilerplate-lite/blob/master/config.js))

5. Before you start the Node Server, start your Mongo Process

    `mongod --dbpath /data/db`



## File Structure
* [/bin](https://github.com/alexander-lee/react-boilerplate/tree/master/bin) holds the Server Script *(Don't Touch)*
* [/public](https://github.com/alexander-lee/react-boilerplate/tree/master/public) holds static/public files
* [/client](https://github.com/alexander-lee/react-boilerplate/tree/master/client) is your Front-End (Client-side) React Components
* [/models](https://github.com/alexander-lee/react-boilerplate/tree/master/models) holds all of your MongoDB models
* [/routes](https://github.com/alexander-lee/react-boilerplate/tree/master/routes) holds all of our Backend Routing
* [/styles](https://github.com/alexander-lee/react-boilerplate/tree/master/styles) is where you write your Sass (SCSS) files
* [/views](https://github.com/alexander-lee/react-boilerplate/tree/master/views) is where you write your .ejs files (Including CDN scripts)

## Useful Readings
* [React Router Documentation](https://reacttraining.com/react-router/web/api)
* [Mongoose Documentation](http://mongoosejs.com/docs/api.html)
* [Mongo & Mongoose Cheatsheet](https://github.com/azat-co/cheatsheets/blob/master/mongodb-mongoose/readme.md)
* [Express Cheatsheet](https://github.com/azat-co/cheatsheets/tree/master/express4)


