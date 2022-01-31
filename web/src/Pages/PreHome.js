import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/main.css';
import aunty from '../accets/aunty.jpg';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate =  useNavigate()
    return (
      
        <div className='body'>
            <Row style={{display:'flex'}}>
            <Col>
                <div className='textBoldWhite'  md={12} lg={6}>
                "Somewhere inside of all of us is the power to change the world”
                </div>
                <button className='buttonGold' 
                onClick={
                    ()=>{
                        navigate('/home')
                    }
                }>
                    Vote Now
                </button>
                </Col>
                <Col className='d-none d-sm-block' >
                <img src={aunty} alt="aunty" className='aunty'/>
                </Col>
       
            </Row>
        </div>
    );
};

export default Home;