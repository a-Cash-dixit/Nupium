import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Web3.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Web3 = () => {
  return (
    <>
      <div className="Web3">
        <h1>Degree in Web 3 Technologies (Two Year Programme)</h1>
        <p>
          This degree program aims to provide a comprehensive understanding of
          Web 3 technology and its intersection with other emerging technologies
          such as Blockchain, IoT, Artificial Intelligence, and Machine
          Learning. Each semester focuses on a different technological field,
          culminating in a well-rounded, interdisciplinary education.
        </p>
        <ul>
          <li>An intensive, holistic program that spans over 24 months.</li>
          <li>
            Dive deep into Web3, AI, Blockchain, Machine Learning and IoT with a
            curriculum that's both comprehensive and cutting-edge.
          </li>
          <li>
            Upon completion, you'll be awarded a degree that stands as a
            testament to your expertise and readiness for the industry.
          </li>
          <li>Total 144 Hour Live Classes in 2 year duration.</li>
          <li>4 Semester in duration of two years.</li>
          <li>
            Each Semester consists of 3 Courses, that means 12 different courses
            will be there in the syllabus.
          </li>
          <li>6 Hour each course divided in 2 classes every month.</li>
        </ul>
      </div>
      <div className="semesters">
      <DropdownButton drop="down" variant="warning" title="Semester 1">
      <Dropdown.Item href="#/action-1">Course 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Course 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Course 3</Dropdown.Item>
    </DropdownButton>
    <DropdownButton drop="down" variant="warning" title="Semester 2">
      <Dropdown.Item href="#/action-1">Course 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Course 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Course 3</Dropdown.Item>
    </DropdownButton>
    <DropdownButton drop="down" variant="warning" title="Semester 3">
      <Dropdown.Item href="#/action-1">Course 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Course 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Course 3</Dropdown.Item>
    </DropdownButton>
    <DropdownButton drop="down" variant="warning" title="Semester 4">
      <Dropdown.Item href="#/action-1">Course 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Course 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Course 3</Dropdown.Item>
    </DropdownButton>
    </div>
    </>
  );
};
export default Web3;
