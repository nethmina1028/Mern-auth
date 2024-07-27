import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();


//signup Api

router.post('/signup', async (req, res) => {

//console.log(req.body);

 const {username, email, password} = req.body;
 const newUser = new User ({
    username,
    email,
    password,
 });
   await newUser.save();
   res.status(201).json({
       message: 'User created successfully!',
   });

});

export default router;