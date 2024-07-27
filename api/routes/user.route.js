import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    res.json({

        message: 'api working',
    })
}
);

//signup Api

router.post('/signup', (req, res) => {

console.log(req.body);

});

export default router;