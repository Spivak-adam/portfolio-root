// Controllers for the Experience Collection

import 'dotenv/config';
import express from 'express';
import * as experiences from './experiences-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/experiences', (req,res) => { 
    experiences.createExperience(
        req.body.experience, 
        req.body.type, 
        req.body.language,
        req.body.proficiency,
        req.body.date
        )
        .then(experience => {
            console.log(`"${experience.experience}" was added to the collection.`);
            res.status(201).json(experience);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Server cannot process client side request to create new object.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/experiences', (req, res) => {
    experiences.retrieveExperiences()
        .then(experience => { 
            if (experience !== null) {
                console.log(`All experiences were retrieved from the collection.`);
                res.json(experience);
            } else {
                res.status(404).json({ Error: 'No experiences found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Server cannot process client side request to retreive object.' });
        });
});


// RETRIEVE by ID controller
app.get('/experiences/:_id', (req, res) => {
    experiences.retrieveExperienceByID(req.params._id)
    .then(experience => { 
        if (experience !== null) {
            console.log(`"${experience.title}" was retrieved, based on its ID.`);
            res.json(experience);
        } else {
            res.status(404).json({ Error: 'Experience not found based on ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Server cannot process client side request to retrieve object by ID.' });
    });

});


// UPDATE controller ************************************
app.put('/experiences/:_id', (req, res) => {
    experiences.updateExperience(
        req.params._id, 
        req.body.experience, 
        req.body.type, 
        req.body.language,
        req.body.proficiency,
        req.body.date
    )
    .then(experience => {
        console.log(`"${experience.title}" was updated.`);
        res.json(experience);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Server cannot process client side request to update Database.' });
    });
});


// DELETE Controller ******************************
app.delete('/experiences/:_id', (req, res) => {
    experiences.deleteExperienceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} experience was deleted.`);
                res.status(200).send({ Success: 'Deleted experience data from the given ID.' });
            } else {
                res.status(404).json({ Error: 'Could not delete experience from Database by ID because object was not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Server cannot process client side request to delete object because Database was empty.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
