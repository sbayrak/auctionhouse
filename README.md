# AuctionHouse

AuctionHouse is a tender based web application where the companies may register with requested mandatory informations (tax number, website, tax office name, etc...) and open a tender and get offers from other companies. 

This project uses MongoDB as database, NodeJS and Express as back-end language and ReactJS for handling front-end. <br>

## Installation

``` 
npm install
```
Please run the command above both in main folder and in ```/client/``` folder.

## Start
```
npm run dev
```
Please run the command above to start the development server, React uses port 3000, backend API uses port 5000. 

# WARNING
This project based on a keyword of "advert". So many adBlock extensions blocks you to make HTTP requests to the API, in order to fix it, you need to disable the any adBlock extension while using the website. Or whitelist the current URL in the extensions' settings.

## Website
This project deployed on Heroku. Feel free to visit. <br>
After making some editing on the source code, the first compiling of the website may take up to 10 seconds to be fully ready to serve. <br>
https://auctionhouse12.herokuapp.com/
