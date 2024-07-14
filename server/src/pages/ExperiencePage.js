import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ExperienceList from '../components/ExperienceList';
import { Link } from 'react-router-dom';

function ExperiencesPage({ setExperience }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [experiences, setExperiences] = useState([]);

    // RETRIEVE the entire list of experiences
    const loadExperiences = async () => {
        const response = await fetch('/experiences');
        const experiences = await response.json();
        setExperiences(experiences);
    } 
    

    // UPDATE a single experience
    const onEditExperience = async experience => {
        setExperience(experience);
        redirect("/update");
    }


    // DELETE a single experience  
    const onDeleteExperience = async _id => {
        const response = await fetch(`/experiences/${_id}`, { method: 'DELETE' });
        console.log(response);
        if (response.status === 204) {
        const getResponse = await fetch('/experiences');
        const experiences = await getResponse.json();
        setExperiences(experiences);
        } else {
        console.error(`Failed to delete experience with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the experiences
    useEffect(() => {
        loadExperiences();
    }, []);

    // DISPLAY the experiences
    return (
        <>
            <h2>List of Experiences</h2>
            <p>This page displays a table of my past professional experience. It lists the name,
                type, language, proficieny level, and the date. There is also an option to add, delete,
                or edit different pieces of experience.
            </p>
            <Link to="/create">Add Experience</Link>
            <ExperienceList 
                experiences={experiences} 
                onEdit={onEditExperience} 
                onDelete={onDeleteExperience} 
            />
        </>
    );
}

export default ExperiencesPage;