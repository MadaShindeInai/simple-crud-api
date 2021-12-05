# simple-crud-api

## How to run
1. Install [Node.js](https://nodejs.org/en/download/). (Version 16.13 is required!)  
2. Run `git clone git@github.com:MadaShindeInai/simple-crud-api.git` in your terminal  
4. Run `./simple-crud-api` in your terminal
5. Run `git checkout simple-crud-api`command in your terminal
5. Run `npm install` in your terminal
6. Run `npm run start:dev` or `npm run start:prod` in your terminal for dev or prod mode.

## Usage examples

Default url for this app `localhost:5555`.  

* GET `/person` or `/person/${personId}` will return all persons or person by specified id
* POST `/person` will create record with new person and store it in data.json file
* PUT `/person/${personId}` will update record about person that id is specified in request
* DELETE `/person/${personId}` will delete record about person that id is specified in request

Example: GET `localhost:5555/person` return all persons and `localhost:5555/person/1` will return person with id:'1