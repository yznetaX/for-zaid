const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts

router.get('/', async (req, res) =>{
    const movies = await loadMixsCollection();
    res.send(
        await movies.find({}).toArray()
    )
});


router.get('/:name', async (req, res) => {
    const movies = await loadMixsCollection();
    res.send(
        await movies.find({name: req.params.name}).toArray()
    );
});


//Add Post 

router.post('/', async (req, res) =>{
    const movies = await loadMixsCollection();
    await movies.insertMany(
        [
            {
                name: req.body.name,
                img: req.body.img,
                discription: req.body.discription,
                actors: req.body.actors,
                quality: req.body.quality,
                dlink: req.body.dlink,
                imdbrate: req.body.imdbrate,
                route: req.body.route,
                trailer: req.body.trailer,
                genre: req.body.genre,
                director: req.body.director,
                duration: req.body.duration,
                category: req.body.category,
                lang: req.body.lang,
                release: req.body.release,
                createdAt: new Date()                    
            }
        ]
    );
    res.status(201).send();
});






//Connection To MongoDB

async function loadMixsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://Nour:nour890@tv-show-1z4zp.mongodb.net/test?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true}
    );
    return client.db('tv-show').collection('movies');
}


module.exports = router