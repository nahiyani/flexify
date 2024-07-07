import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Pagination, InputGroup, FormControl, Dropdown, Button } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi'; // Import search icon
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Classes.css';

const instructors = [
  { name: 'Dwayne Johnson', specialty1: 'Specialty 1A', specialty2: 'Specialty 1B' },
  { name: 'Arnold Schwarzenegger', specialty1: 'Specialty 2A', specialty2: 'Specialty 2B' },
  { name: 'Will Smith', specialty1: 'Specialty 3A', specialty2: 'Specialty 3B' },
  { name: 'Sofia Vergara', specialty1: 'Specialty 4A', specialty2: 'Specialty 4B' },
  { name: 'Timothee Chalamet', specialty1: 'Specialty 5A', specialty2: 'Specialty 5B' },
  { name: 'Jennifer Lawrence', specialty1: 'Specialty 6A', specialty2: 'Specialty 6B' },
  { name: 'Jennifer Lopez', specialty1: 'Specialty 7A', specialty2: 'Specialty 7B' },
  { name: 'Eric Winter', specialty1: 'Specialty 8A', specialty2: 'Specialty 8B' },
  { name: 'Scarlett Johansson', specialty1: 'Specialty 9A', specialty2: 'Specialty 9B' },
  { name: 'Tom Holland', specialty1: 'Specialty 10A', specialty2: 'Specialty 10B' },
  { name: 'Ana de Armas', specialty1: 'Specialty 11A', specialty2: 'Specialty 11B' },
  { name: 'Zara Larsson', specialty1: 'Specialty 12A', specialty2: 'Specialty 12B' },
  { name: 'Aubrey Graham', specialty1: 'Specialty 13A', specialty2: 'Specialty 13B' },
  { name: 'Hugh Jackman', specialty1: 'Specialty 14A', specialty2: 'Specialty 14B' },
  { name: 'Emma Watson', specialty1: 'Specialty 15A', specialty2: 'Specialty 15B' },
  { name: 'Megan Fox', specialty1: 'Specialty 16A', specialty2: 'Specialty 16B' },
];

const classTypes = ['Cardio', 'HIIT', 'Pilates', 'Strength Training', 'Yoga'];
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
const durations = ['< 30 minutes', '30 - 60 minutes', '> 60 minutes'];
const equipment = ['No Equipment', 'Dumbbells', 'Resistance Bands', 'Step Platform', 'Yoga Mat'];
const formats = ['Live', 'On Demand'];
const ratings = ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'];

const generateRandomClasses = () => {
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return Array.from({ length: 20 }, (_, i) => ({
    name: `Class Name ${i + 1}`,
    instructor: getRandomElement(instructors),
    difficulty: getRandomElement(difficulties),
    duration: getRandomElement(durations),
    equipment: getRandomElement(equipment),
    format: getRandomElement(formats),
    rating: getRandomElement(ratings),
  }));
};

const Classes = () => {
  const [classes, setClasses] = useState(generateRandomClasses());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [selectedClassTypes, setSelectedClassTypes] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const classesPerPage = 5;

  const handleCheckboxChange = (setSelectedFunction, selectedItems, item) => {
    if (selectedItems.includes(item)) {
      setSelectedFunction(selectedItems.filter(i => i !== item));
    } else {
      setSelectedFunction([...selectedItems, item]);
    }
  };

  const filterClasses = () => {
    return classes.filter(cls =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedInstructor || cls.instructor.name === selectedInstructor) &&
      (selectedClassTypes.length === 0 || selectedClassTypes.includes(cls.difficulty)) &&
      (selectedDifficulties.length === 0 || selectedDifficulties.includes(cls.difficulty)) &&
      (selectedDurations.length === 0 || selectedDurations.includes(cls.duration)) &&
      (selectedEquipment.length === 0 || selectedEquipment.includes(cls.equipment)) &&
      (selectedFormats.length === 0 || selectedFormats.includes(cls.format)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(cls.rating))
    );
  };

  useEffect(() => {
    filterClasses();
  }, [searchTerm, selectedInstructor, selectedClassTypes, selectedDifficulties, selectedDurations, selectedEquipment, selectedFormats, selectedRatings]);

  const filteredClasses = filterClasses();
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = filteredClasses.slice(indexOfFirstClass, indexOfLastClass);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredClasses.length / classesPerPage);

  return (
    <div className="app">
      <Header />
      <div className="search-bar-top">
        <BiSearch className="search-icon" />
        <InputGroup>
          <FormControl
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className="search-container">
        <div className="facets">
          <div className="facet">
            <div className="facet-header">Instructors</div>
            <Dropdown onSelect={(e) => setSelectedInstructor(e)}>
              <Dropdown.Toggle variant="secondary" className="instructor-selector">
                {selectedInstructor || 'Select Instructor'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {instructors.map((instructor) => (
                  <Dropdown.Item key={instructor.name} eventKey={instructor.name}>
                    {instructor.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="facet">
            <div className="facet-header">Class Type</div>
            {classTypes.map((type) => (
              <Form.Check
                key={type}
                type="checkbox"
                label={type}
                checked={selectedClassTypes.includes(type)}
                onChange={() => handleCheckboxChange(setSelectedClassTypes, selectedClassTypes, type)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Difficulty</div>
            {difficulties.map((difficulty) => (
              <Form.Check
                key={difficulty}
                type="checkbox"
                label={difficulty}
                checked={selectedDifficulties.includes(difficulty)}
                onChange={() => handleCheckboxChange(setSelectedDifficulties, selectedDifficulties, difficulty)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Duration</div>
            {durations.map((duration) => (
              <Form.Check
                key={duration}
                type="checkbox"
                label={duration}
                checked={selectedDurations.includes(duration)}
                onChange={() => handleCheckboxChange(setSelectedDurations, selectedDurations, duration)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Equipment</div>
            {equipment.map((equip) => (
              <Form.Check
                key={equip}
                type="checkbox"
                label={equip}
                checked={selectedEquipment.includes(equip)}
                onChange={() => handleCheckboxChange(setSelectedEquipment, selectedEquipment, equip)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Format</div>
            {formats.map((format) => (
              <Form.Check
                key={format}
                type="checkbox"
                label={format}
                checked={selectedFormats.includes(format)}
                onChange={() => handleCheckboxChange(setSelectedFormats, selectedFormats, format)}
                className="purple-checkbox"
              />
            ))}
          </div>

          <div className="facet">
            <div className="facet-header">Rating</div>
            {ratings.map((rating) => (
              <Form.Check
                key={rating}
                type="checkbox"
                label={rating}
                checked={selectedRatings.includes(rating)}
                onChange={() => handleCheckboxChange(setSelectedRatings, selectedRatings, rating)}
                className="purple-checkbox"
              />
            ))}
          </div>
        </div>

        <div className="results">
          <div className="results-count">Showing {filteredClasses.length} classes</div>
          {currentClasses.map((cls, index) => (
            <Card key={index} className="class-card">
              <Card.Body className="class-card-content">
                <div className="image-placeholder"></div>
                <div className="class-details">
                  <Card.Title className="class-title purple-text">{cls.name}</Card.Title>
                  <Card.Text className="instructor-name purple-text">
                    Instructor: {cls.instructor.name}
                  </Card.Text>
                  <Card.Text>Difficulty: {cls.difficulty}</Card.Text>
                  <Card.Text>Duration: {cls.duration}</Card.Text>
                  <Card.Text>Equipment: {cls.equipment}</Card.Text>
                  <Card.Text>Format: {cls.format}</Card.Text>
                  <Card.Text>Rating: {cls.rating}</Card.Text>
                  <Button variant="primary" className="purple-button">
                    Join Class
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
          <div className="results-count bottom-results-count">
            Showing {currentClasses.length} of {filteredClasses.length} classes
          </div>
        </div>
      </div>

      <Pagination>
        <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>

      <Footer />
    </div>
  );
};

export default Classes;
