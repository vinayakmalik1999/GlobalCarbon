
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

      <Form onSubmit ={this.handleSubmit}>

  <Form.Group>
    <Form.Label>Means of transport</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I almost always go by public transport, cycle or walk."

        />
        <Form.Check
          type="radio"
          label="I use the car and public transport about the same amount."

        />
        <Form.Check
          type="radio"
          label="I almost always drive by car."

        />
  </Form.Group>


  <Form.Group >
    <Form.Label>Flying</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I never fly."

        />
        <Form.Check
          type="radio"
          label="I fly max. two short distance flights or one long distance every couple of years."

        />
        <Form.Check
          type="radio"
          label="I fly one short distance and one long distance in a year."

        />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Food</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I only eat vegetarian food."

        />
        <Form.Check
          type="radio"
          label="I eat meat 2 to 3 times a week."

        />
        <Form.Check
          type="radio"
          label="I eat meat almost every day - mostly from an unknown source."

        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Shopping</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I very rarely buy new products, clothes or decorative items."

        />
        <Form.Check
          type="radio"
          label="I buy new products, clothes or decorative things every now and again."

        />
        <Form.Check
          type="radio"
          label="I buy a new appliance, decoration, clothes or shoes every week."

        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Energy</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I live in a building that was built to be energy efficient."

        />
        <Form.Check
          type="radio"
          label="I live in a normal building but I use renewable energy for heating."

        />
        <Form.Check
          type="radio"
          label="I live in a normal building that is heated with oil or natural gas."

        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label className >Warm water</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I generally don't shower for longer that 5 minutes and I rarely take a bath."

        />
        <Form.Check
          type="radio"
          label="I love standing under the shower for a good 20 minutes - but in exchange I rarely have baths."

        />
        <Form.Check
          type="radio"
          label="I often have baths - but in exchange I shower less often and only have short showers."

        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label class="top1">Heating</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="In winter, I wear a pullover when I am at home (18-20°C)."

        />
        <Form.Check
          type="radio"
          label="In winter, it is pleasantly warm in my home (20-22°C)."

        />
        <Form.Check
          type="radio"
          label="I can sit in my living room with just a T-shirt in winter (over 22°C)."

        />
  </Form.Group>


  <Button variant="dark" type="submit" active>
    Submit
  </Button>
</Form>

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
