import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

// Pages
const Home = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold">Welcome to My Website</h1>
    <p className="mt-4 text-lg">I am a PhD student in Computer Science specializing in AI.</p>
  </div>
);

const About = () => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold">About Me</h1>
    <p className="mt-4">I am passionate about research in Artificial Intelligence and Computer Science.</p>
  </div>
);

const Publications = () => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold">Publications</h1>
    <ul className="mt-4 space-y-2">
      <li><a href="#" className="text-blue-500">Paper 1 - AI Research</a></li>
      <li><a href="#" className="text-blue-500">Paper 2 - Machine Learning</a></li>
    </ul>
  </div>
);

const Projects = () => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold">Projects</h1>
    <p className="mt-4">Here are some of my AI and CS projects.</p>
  </div>
);

const Contact = () => (
  <div className="p-10 text-center">
    <h1 className="text-3xl font-bold">Contact Me</h1>
    <p className="mt-4">Email: myemail@example.com</p>
    <p>LinkedIn: <a href="#" className="text-blue-500">My Profile</a></p>
  </div>
);

// Navbar
const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-center space-x-6">
    <Link to="/" className="hover:text-yellow-400">Home</Link>
    <Link to="/about" className="hover:text-yellow-400">About</Link>
    <Link to="/publications" className="hover:text-yellow-400">Publications</Link>
    <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
    <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
  </nav>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
