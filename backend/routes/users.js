const { json } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/user.model')

router.get('/', (req,res) => {
  User.find()
    .then(users => { 
      res.json(users)
      // const newusers = users.map(usernames => usernames.username)
      // console.log(newusers.includes('aw'))
    })  
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', (req,res) => {
  User.findById(req.params.id)
    .then(users => {res.json(users)})  
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req,res) => {
  const username = req.body.username
  const newUser = new User({username})
  newUser.save()
  .then(() => res.json('User added'))
  // .catch(res.send("User not added!"))

})

router.patch('/:id', (req,res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username    
      user.save()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => json.status(400).json('Error: ' + err))
})

router.delete('/:id', (req,res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted!'))
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router;
