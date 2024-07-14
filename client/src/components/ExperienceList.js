import React from 'react';
import Experience from './Experience';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ExperienceList({ experiences, onDelete, onEdit }) {
    return (
        <table id="experiences">
            <caption>Add or Edit Experiences</caption>
            <thead>
                <tr>
                    <th>Experience</th>
                    <th>Type</th>
                    <th>Language</th>
                    <th>Proficiency</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {experiences.map((experience, i) => 
                    <Experience 
                        experience={experience} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ExperienceList;
