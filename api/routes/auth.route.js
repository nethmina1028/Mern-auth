import express from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // Import bcryptjs


const router = express.Router();


//signup Api

router.post('/signup', async (req, res) => {

//console.log(req.body);

 const {username, email, password} = req.body;
 const hashedPassword = bcryptjs.hashSync(password, 10);
 const newUser = new User ({
    username,
    email,
    password : hashedPassword
 });

 try{
   await newUser.save();
   res.status(201).json({
       message: 'User created successfully!',
   });
 }catch(err){
     res.status(500).json({
         message: 'Something went wrong!',
     });
 }
   

});

export default router;