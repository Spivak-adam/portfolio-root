// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import ProductData from './data/products.js';
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicPage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import ContactPage from './pages/ContactPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import StaffPage from './pages/Staff.js';

// If your schema requires SHORT data input, then use the TABLE design.
import EditExperiencePageTable from './pages/EditExperiencePageTable.js';
import AddExperiencePageTable from './pages/AddExperiencePageTable.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [experience, setExperience] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1><img src="./android-chrome-192x192.png" className="logoSize" alt="Adam Spivak Logo" /> Adam Spivak</h1>
            <p>A Full-stack MERN portfolio website written by Adam Spivak.</p>
            <Navigation />
          </header>

          <main>
            <section>
                <Routes>
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/ExperiencePage" element={<ExperiencePage setExperience={setExperience}/>}/>
                    <Route path="/TopicPage" element={<TopicsPage/>}/>
                    <Route path="/GalleryPage" element={<GalleryPage/>}/>
                    {/*<Route path="/OrderPage" element={<OrderPage/>}/>
                    <Route path="/ContactPage" element={<ContactPage/>}/>
                    <Route path="/StaffPage" element={<StaffPage/>}/>*/}
                 
                    <Route path="/create" element={<AddExperiencePageTable />} /> 
                    <Route path="/update" element={<EditExperiencePageTable experienceToEdit={experience} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p> &copy; 2024 Adam Spivak</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;