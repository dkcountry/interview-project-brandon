# interviewapp-brandon

## Completed Work

Hello KeeperTax. Apologies for this late submission. It was the Thanksgiving Holiday followed by the fact that I ran into technical issues installing MySQL (along with complications of the early cold). While I was allowed to submit the solution without MySQL, I feel it would not be right.

Therefore, instead of using MySQL, I decided to go with MongoDB. Since I didn't want to deal with the installation of the database, I decided to have mLab host the database.

How to set up mLab: https://docs.mlab.com/

In the server/src/App.constants.js, there is space for you to add your mLab database. Be sure to include the database username and password according to the documentation.

Since I was using windows, I had to install `cross-env` to get the scripts running. It should only be a development dependency and it's meant to cover those who are on Windows.

I was unable to get the username due to the weirdness of Windows.

If you have any questions or concerns, feel free to contact me! I think I was able to replicate the front-end as needed and made it responsive. I was also to get the back end to work. I had a great couple hours learning about a new library and learning about MongoDB and how mLab works!

Again, I apologize for the delays. Due to factors beyond my control, this took longer than I normally would. This is not indicative of what I normally do on assignments like these. 

Best,

Brandon

## Prerequisites

- MySQL
- Node

You can install and start MySQL using the following commands.

```
# install mysql
brew install mysql

# start mysql
brew services start mysql

# log into mysql
mysql --host=localhost --user=root --password=root --database=interviewdb
```

## Server

```
cd server

# install packages
yarn

# db setup
NODE_ENV=development npx sequelize db:create
NODE_ENV=development npx sequelize db:migrate
NODE_ENV=development npx sequelize db:seed:all

# run server
yarn start

# access server
http://localhost:5006
```

## Client

```
cd client

# install packages
yarn

# run client
yarn start

# access client
http://localhost:5007
```
