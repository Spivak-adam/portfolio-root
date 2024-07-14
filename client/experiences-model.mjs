// Models for the Experience Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to MongoDB Server and reach Experiences_DB.' });
    } else  {
        console.log('Success: Connected to Expierence_DB and ready for CRUD using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const experienceSchema = mongoose.Schema({
	experience:    { type: String, required: true },
    type:          { type: String, required: true },
    language:      { type: String, required: true },
	proficiency:   { type: Number, required: true, min: 0, max: 10 },
	date:          { type: Date,   required: true }
});

// Compile the model from the schema 
// by defining the collection name "experiences".
const Experience = mongoose.model('experiences', experienceSchema);


// CREATE model *****************************************
const createExperience = async (experience, type, language, proficiency, date) => {
    const experiences = new Experience({ 
        experience: experience, 
        type: type,
        language: language, 
        proficiency: proficiency,
        date: date
    });
    return experiences.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveExperiences = async () => {
    const query = Experience.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveExperienceByID = async (_id) => {
    const query = Experience.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteExperienceById = async (_id) => {
    const result = await Experience.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateExperience = async (_id, experience, type, language, proficiency, date) => {
    const result = await Experience.replaceOne({_id: _id }, {
        experience: experience, 
        type: type,
        language: language, 
        proficiency: proficiency,
        date: date
    });
    return {
        experience: experience, 
        type: type,
        language: language, 
        proficiency: proficiency,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createExperience, retrieveExperiences, retrieveExperienceByID, updateExperience, deleteExperienceById }