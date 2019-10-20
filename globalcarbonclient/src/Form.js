
import React,{ Component } from 'react';
import Card from 'react-bootstrap/Card';
import { MdPhoneInTalk } from "react-icons/md";
import {IconContext} from 'react-icons';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollAnimation from 'react-animate-on-scroll';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { FaCopyright,FaChevronUp } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class New extends Component {
  constructor(props){
    super(props);
  this.state={
    q1:{
      1:"",
      2:"",
      3:"",
    },
    q2:{
      1:"",
      2:"",
      3:"",
    },
    q3:{
      1:"",
      2:"",
      3:"",
    },
    q4:{
      1:"",
      2:"",
      3:"",
    },
    q5:{
      1:"",
      2:"",
      3:"",
    },
    q6:{
      1:"",
      2:"",
      3:"",
    },
    q7:{
      1:"",
      2:"",
      3:"",
    },

  }
  this.handleq1Change = this.handleq1Change.bind(this);
  this.handleq2Change = this.handleq2Change.bind(this);
  this.handleq3Change = this.handleq3Change.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleq1Change(event){

    this.setState({q1:event.target.value});

  }
  handleq2Change(event){
      this.setState({emailValue:event.target.value});
  }
  handleq3Change(event){
    this.setState({messageValue:event.target.value});

  }
  handleSubmit(event){
    event.preventDefault();
   axios({
         method: "POST",
         url:"http://localhost:3002/send",
         data: {
             name: this.state.nameValue,
             email: this.state.emailValue,
             messsage: this.state.messageValue
         }
      }).then((response) =>{
        alert('Message Sent!')

        this.setState({  emailValue:'',
          nameValue:'',
          messageValue:''})

      })
      .catch((error) =>{
        console.log(error)
        alert('oops something went wrong! please try again!')
      })


  }

  render() {
    return (


      <div>
<br/>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Fill out these simple questions to calculate your carbon index</Card.Title>


        </Card.Body>

      </Card>

<Container>
<ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
      <Form onSubmit ={this.handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com"  value = {this.state.emailValue} onChange={this.handleEmailChange} required/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Means of transport</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I almost always go by public transport, cycle or walk."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I use the car and public transport about the same amount."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I almost always drive by car."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Flying</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I never fly."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I fly max. two short distance flights or one long distance every couple of years."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I fly one short distance and one long distance in a year."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Food</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I only eat vegetarian food."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I eat meat 2 to 3 times a week."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I eat meat almost every day - mostly from an unknown source."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Shopping</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I very rarely buy new products, clothes or decorative items."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I buy new products, clothes or decorative things every now and again."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I buy a new appliance, decoration, clothes or shoes every week."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Energy</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I live in a building that was built to be energy efficient."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I live in a normal building but I use renewable energy for heating."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I live in a normal building that is heated with oil or natural gas."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Warm water</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I generally don't shower for longer that 5 minutes and I rarely take a bath."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I love standing under the shower for a good 20 minutes - but in exchange I rarely have baths."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I often have baths - but in exchange I shower less often and only have short showers."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Heating</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="In winter, I wear a pullover when I am at home (18-20°C)."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="In winter, it is pleasantly warm in my home (20-22°C)."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I can sit in my living room with just a T-shirt in winter (over 22°C)."
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows="3"  value = {this.state.messageValue} onChange={this.handleMessageChange}required/>
  </Form.Group>
  <Button variant="dark" type="submit" active>
    Submit
  </Button>
</Form>
</ScrollAnimation>
</Container>
<br/>





<Navbar className='BottomNavbar' style={{'background-color':'#000000'}}  variant="dark"  >
<Navbar.Brand>
<IconContext.Provider value={{ color: "#ffffff" }}>
<FaCopyright/>
</IconContext.Provider>
    {' Global Carbon'}
  </Navbar.Brand>

<Nav className="ml-auto">
<a href ='#top'>
<IconContext.Provider value={{ color: "#ffffff" }}>
<FaChevronUp/>
</IconContext.Provider>
</a>
</Nav>
</Navbar>
</div>


)
}
}
