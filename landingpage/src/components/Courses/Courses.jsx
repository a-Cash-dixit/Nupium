import CourseCard from "./CourseCard";
import "./Courses.css";
import React from "react";
import Modal from '@mui/material/Modal';
import Web3 from "../Web3/Web3";
var img1=require("../../images/1012212859_01547e3f17.jpg");
const Courses=()=>{
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div className="coursesContainer">
            <h1>Courses that Aligns Best With Your Educational Goals</h1>
        <div className="courses" >
        <div onClick={handleOpen} style={{cursor:"pointer"}}>
        <CourseCard title="Degree Programme" imageUrl={img1} description="This degree program aims to provide a comprehensive understanding of
        Web 3 and Blockchain technology" reviews="100" weeks="12"/></div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Web3 />
      </Modal>
      <div onClick={handleOpen} style={{cursor:"pointer"}}>
        <CourseCard title="Introduction Programme" imageUrl={img1} description="Non-Fungible Tokens (NFTs),Deep Fake,Crypto Trading,LLMs,Decentralized Finance (DeFi)" reviews="100" weeks="8"/></div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Web3 />
      </Modal>
      <div onClick={handleOpen} style={{cursor:"pointer"}}>
        <CourseCard title="Diploma Programme" imageUrl={img1} description="Understanding decentralized systems,Origin and history of blockchain,Key principles of Web3"
        reviews="100" weeks="8"/></div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Web3 />
      </Modal>
        </div>
        </div>
    )
}
export default Courses;