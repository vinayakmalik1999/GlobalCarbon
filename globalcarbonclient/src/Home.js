import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Particles from 'react-particles-js';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
import "./Home.css"
export default class Home extends Component {
  render() {
    return (


      <div>


      <Particles height='-webkit-fill-available' width='-webkit-fill-available'  params={{
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 10,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "",
              "width": 0,
              "height": 0
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false,
            }
          },
          "size": {
            "value": 3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 180,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}>
        </Particles>
        <Container>
        <Card bg='transparent' border='white' className='introCard'  >
        <Card.Body>
        <center class ="heading">

                  Welcome to Global <b>Carbon</b>

                   </center>
                   </Card.Body>
                    </Card>
    <Row>
    <Col xs={6}>

                   <Button  className ='projectButton' variant="outline-secondary" size="lg" block>Count Your <b>Carbon</b></Button>

    </Col>
    <Col xs={6} >

                   <Button variant="outline-success" size="lg" block>  Global Carbon <b>Goal</b>
                   </Button>

    </Col>
    </Row>

        </Container>
      </div>
    )
}
}
