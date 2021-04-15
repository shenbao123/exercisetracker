const express = require('express')
const router = express.Router();
const Exercise = require('../models/exercise.model')

router.get('/', (req,res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', (req,res) => {
  Exercise.findById(req.params.id)
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error :' + err))
})

router.post('/', (req,res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  })

  newExercise.save()
    .then(() => res.json('Exercise Added!'))
    .catch(err => res.status(400).json('Error :' + err))
})

router.delete('/:id', (req,res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error: ' + err))

    // or
    
  // Exercise.remove({_id: req.params.id})
  //   .then(() => res.json('Exercise Deleted'))
  //   .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:id', async (req,res) => {
  await Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username
      exercise.description = req.body.description
      exercise.duration = Number(req.body.duration)
      exercise.date = Date.parse(req.body.date)
    
      exercise.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => json.status(400).json('Error: ' + err))

    // or 

    // Exercise.findByIdAndUpdate(
    //   {
    //     _id: req.params.id,
    //   },
    //   {
    //     username: req.body.username,
    //     description: req.body.description,
    //     duration: Number(req.body.duration),
    //     date: Date.parse(req.body.date)
    //   },
    //   (err,result) => {
    //     if(err)
    //       res.send('Error: ' + err)
    //     else
    //     res.json('succes!')
    //   })

})


module.exports = router;