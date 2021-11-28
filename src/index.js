require('dotenv').config();
const http = require('http');
const url = require('url');
const fs = require('fs');
// const querystring = require('querystring');

const personsData = fs.readFileSync('./data.json');
const persons = JSON.parse(personsData);
const port = process.env.PORT || 3000;
let lastindex =
  persons.length === 0 ? 0 : Number(persons[persons.length - 1].id);

const server = http.createServer((req, res) => {
  const urlparse = url.parse(req.url, true);
  const resUrl = urlparse.pathname;

  if (resUrl === '/person' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(persons, null, 2));
  }
  if (resUrl.match(/person\/([0-9]+)/) && req.method === 'GET') {
    const id = resUrl.match(/person\/([0-9]+)/)[1].toString();
    const personById = persons.find((person) => person.id === id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(personById, null, 2));
  }
  if (resUrl === '/person' && req.method === 'POST') {
    req.on('data', (data) => {
      const jsondata = JSON.parse(data);
      const { name, age, hobbies } = jsondata;
      if (!name || !age || !hobbies) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            error: `missing data: ${name ? '' : 'name'} ${age ? '' : 'age'} ${
              hobbies ? '' : 'hobbies'
            }`,
          })
        );
      }
      const newItem = { id: (lastindex += 1).toString(), name, age, hobbies };
      persons.push(newItem);

      fs.writeFile('./data.json', JSON.stringify(persons), (err) => {
        if (err) {
          const message = { message: 'could not persist data!' };
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(message, null, 2));
        } else {
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(newItem, null, 2));
        }
      });
    });
  }
  if (resUrl === '/person/id' && req.method === 'PUT') {
    // TODO: PUT logic
  }
  if (resUrl === '/person/id' && req.method === 'DELETE') {
    // TODO: DELETE logic
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
