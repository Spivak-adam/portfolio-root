import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddExperienceageTable = () => {

    const [experience, setExperience]   = useState('');
    const [type, setType]               = useState('');
    const [language, setLanguage]       = useState('');
    const [proficiency, setProficiency] = useState('');
    const [date, setDate]               = useState('');
    
    const redirect = useNavigate();

    const addExperience = async () => {
        const experienceMovie = { experience, type, language, proficiency, date };
        const response = await fetch('/experiences', {
            method: 'POST',
            body: JSON.stringify(experienceMovie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            redirect("/ExperiencePage");
            alert("Experience added to table.");
        } else {
            redirect("/ExperiencePage");
            alert(`Experience not added to table; status code = ${response.status}`);
        }
    };


    return (
        <>
        <article>
            <h2>Add an experience</h2>
            <p>Please input information to add to the experience table.</p>
            <table id="experiences">
                <caption>Which experience are you adding?</caption>
                <thead>
                    <tr>
                        <th>Experience</th>
                        <th>Type</th>
                        <th>Language</th>
                        <th>proficiency</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><label for="experience">Experience name</label>
                        <input
                            type="text"
                            placeholder="Title of the experience"
                            value={experience}
                            onChange={e => setExperience(e.target.value)} 
                            id="experience" />
                    </td>

                    <td><label for="type">Type of experience</label>
                        <input
                            type="text"
                            placeholder="Type of experience"
                            value={type}
                            onChange={e => setType(e.target.value)} 
                            id="type" />
                    </td>

                    <td><label for="language">Language</label>
                        <input
                            type="text"
                            placeholder="Language used"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td><label for="proficiency">Proficiency level</label>
                        <input
                            type="number"
                            value={proficiency}
                            placeholder="Proficiency level"
                            onChange={e => setProficiency(e.target.value)} 
                            id="proficiency" />
                    </td>

                    <td><label for="date">Experience date</label>
                        <input
                            type="date"
                            value={date}
                            placeholder="Experience of Date"
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addExperience}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddExperienceageTable;