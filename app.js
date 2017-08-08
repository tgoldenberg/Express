const express = require('express')

const Methods = require('./methods');
const app = express()

async function getUsers(req, res) {
  try {
    let users = await request(url, options);
    if (!!users) {
      res.status(200).send({ users: users });
    } else {
      res.status(500).send({ error: 'No users!' });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).send({ error: 'Unable to make request' });
  }
}

async function createUser(req, res) {
 try {
   let newUser = await request(url, options);
   if (!!newUser) {
     res.status(200).send({ user: newUser });
   } else {
     res.status(500).send({ error: 'Could not save new user.' });
 } catch (e) {
   console.warn(e);
   res.status(500).send({ error: 'Could not save new user.' });
 }
}

const Methods = {
  getUsers: getUsers,
  createUser: createUser,
};

// GET method route
app.get('/v1/users', Methods.getUsers);

// POST method route
app.post('/', Methods.createUser)

app.get('/ab+cd', function (req, res) {
  res.send('Hello world I am abcd!')
})

app.listen(3000, function () {
  console.log('example app listening on port 3001')
})
