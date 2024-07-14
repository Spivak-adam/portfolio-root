import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Experience({ experience, onEdit, onDelete }) {
    return (
        <tr>
            <td>{experience.experience}</td>
            <td>{experience.type}</td>
            <td>{experience.language}</td>
            <td>{experience.proficiency}</td>
            <td>{experience.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(experience._id)} /></td>
            <td><MdEdit onClick={() => onEdit(experience)} /></td>
        </tr>
    );
}

export default Experience;