import React from "react";
import Card from "react-bootstrap/Card";
// #F6BE00
const FeatureCard=(props)=>{
    return (
        <Card style={{background:"#FFEA00",width:"39vh",margin:"2%",height:"35vh",padding:"1%",borderRadius:"10%",boxShadow:"revert" }}>
        <Card.Body>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh"}}>{props.title}</Card.Title>
          <Card.Text style={{color:"blue",fontSize:"2vh"}}>
            {props.desc}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default FeatureCard;