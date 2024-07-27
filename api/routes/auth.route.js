import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

//signup Api

router.post('/signup', async (req, res) => {

//console.log(req.body);

 const {name, email, password} = req.body;
 const newUser = new User ({
    name,
    email,
    password,
 });
   await newUser.save()

});

export default router;