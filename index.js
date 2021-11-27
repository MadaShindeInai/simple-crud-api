const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const data = fs.readFileSync('./data.json');
const persons = JSON.parse(data);
const lastindex = persons.length === 0 ? 0 : persons[persons.length - 1].id;

const server = http.createServer((req, res) => {
  const urlparse = url.parse(req.url, true);

  if (urlparse.pathname === '/person' && req.method === 'GET') {
    // TODO: GET logic
  }
  if (urlparse.pathname === '/person' && req.method === 'POST') {
    // TODO: POST logic
  }
  if (urlparse.pathname === '/person/hobbies' && req.method === 'POST') {
    // TODO: POST logic
  }
  if (urlparse.pathname === '/person' && req.method === 'PUT') {
    // TODO: PUT logic
  }
  if (urlparse.pathname === '/person' && req.method === 'DELETE') {
    // TODO: DELETE logic
  }
});
