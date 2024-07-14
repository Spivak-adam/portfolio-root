import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditExperiencePageTable = ({ experienceToEdit }) => {

    const [experience, setExperience] = useState(experienceToEdit.experience);
    const [type, setType] = useState(experienceToEdit.type);
    const [language, setLanguage] = useState(experienceToEdit.language);
    const [proficiency, setProficiency] = useState(experienceToEdit.proficiency);
    const [date, setDate] = useState(experienceToEdit.date.slice(0, 10));

    const redirect = useNavigate();

    const editExperience = async () => {
        const response = await fetch(`/experiences/${experienceToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                experience: experience,
                type: type,
                language: language,
                proficiency: proficiency,
                date: date,
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert(`Edit was successful, and experience updated.`);
        } else {
            const errMessage = await response.json();
            alert(`Was unable to edit experience ${response.status}. ${errMessage.Error}`);
        }
        redirect("/ExperiencePage");
    }

    return (
        <>
            <article>
                <h2>Edit an experience</h2>
                <p>Please modify information from this experience.</p>
                <table id="experiences">
                    <caption>Which experience are you modifying?</caption>
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
                                    onClick={editExperience}
                                    id="submit"
                                >Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
export default EditExperiencePageTable;