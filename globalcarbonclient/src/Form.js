
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
    q1:"",
    q2:"",
    q3:"",
    q4:"",
    q5:"",
    q6:"",
    q7:"",


  }
  this.handleq1Change = this.handleq1Change.bind(this);
  this.handleq2Change = this.handleq2Change.bind(this);
  this.handleq3Change = this.handleq3Change.bind(this);
  this.handleq4Change = this.handleq4Change.bind(this);
  this.handleq5Change = this.handleq5Change.bind(this);
  this.handleq6Change = this.handleq6Change.bind(this);
  this.handleq7Change = this.handleq7Change.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleq1Change(event){

    this.setState({q1:event.target.value});
}
handleq2Change(event){

  this.setState({q2:event.target.value});
}handleq3Change(event){

  this.setState({q3:event.target.value});
}handleq4Change(event){

  this.setState({q4:event.target.value});
}handleq5Change(event){

  this.setState({q5:event.target.value});
}handleq6Change(event){

  this.setState({q6:event.target.value});
}
handleq7Change(event){

  this.setState({q7:event.target.value});
}
handleSum(){
  var score  = (parseInt(this.state.q1, 10) + parseInt(this.state.q2, 10) + parseInt(this.state.q3, 10) + parseInt(this.state.q4, 10) + parseInt(this.state.q5, 10) + parseInt(this.state.q6, 10) + parseInt(this.state.q7, 10));
score = score* (6/7);
return score;
}
  handleSubmit(event){
    event.preventDefault();
    var sum = this.handleSum();
    console.log(sum);

   axios({
         method: "POST",
         url:"http://localhost:3001/api/putData",
         data: {
           footprint: sum,
            latitude: 43.075690,
            longitude: -89.402243
         }
      }).then((response) =>{
        alert("YOUR CARBON FOOTPRINT IS " + sum + "tons/annum");



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
          value= "1"
                                checked={this.state.q1 === "1"}
                                onChange={this.handleq1Change}
        />
        <Form.Check
          type="radio"
          label="I use the car and public transport about the same amount."
          value="2"
                                checked={this.state.q1 === "2"}
                                onChange={this.handleq1Change}
        />
        <Form.Check
          type="radio"
          label="I almost always drive by car."
          value="3"
                                checked={this.state.q1 === "3"}
                                onChange={this.handleq1Change}
        />
  </Form.Group>


  <Form.Group >
    <Form.Label>Flying</Form.Label>
    <br/>
  <Form.Label> Which statement is most accurate for you?</Form.Label>



    <Form.Check
          type="radio"
          label="I never fly."
          value="1"
                                checked={this.state.q2 === "1"}
                                onChange={this.handleq2Change}
        />
        <Form.Check
          type="radio"
          label="I fly max. two short distance flights or one long distance every couple of years."
          value="2"
                                checked={this.state.q2 === "2"}
                                onChange={this.handleq2Change}
        />
        <Form.Check
          type="radio"
          label="I fly one short distance and one long distance in a year."
          value="3"
                                checked={this.state.q2 === "3"}
                                onChange={this.handleq2Change}
        />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Food</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I only eat vegetarian food."
          value="1"
                                checked={this.state.q3 === "1"}
                                onChange={this.handleq3Change}
        />
        <Form.Check
          type="radio"
          label="I eat meat 2 to 3 times a week."
          value="2"
                                checked={this.state.q3 === "2"}
                                onChange={this.handleq3Change}
        />
        <Form.Check
          type="radio"
          label="I eat meat almost every day - mostly from an unknown source."
          value="3"
                                checked={this.state.q3 === "3"}
                                onChange={this.handleq3Change}
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Shopping</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I very rarely buy new products, clothes or decorative items."
          value="1"
                                checked={this.state.q4 === "1"}
                                onChange={this.handleq4Change}
        />
        <Form.Check
          type="radio"
          label="I buy new products, clothes or decorative things every now and again."
          value="2"
                                checked={this.state.q4 === "2"}
                                onChange={this.handleq4Change}
        />
        <Form.Check
          type="radio"
          label="I buy a new appliance, decoration, clothes or shoes every week."
          value="3"
                                checked={this.state.q4 === "3"}
                                onChange={this.handleq4Change}
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Energy</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I live in a building that was built to be energy efficient."
          value="1"
                                checked={this.state.q5 === "1"}
                                onChange={this.handleq5Change}
        />
        <Form.Check
          type="radio"
          label="I live in a normal building but I use renewable energy for heating."
          value="2"
                                checked={this.state.q5 === "2"}
                                onChange={this.handleq5Change}
        />
        <Form.Check
          type="radio"
          label="I live in a normal building that is heated with oil or natural gas."
          value="3"
                                checked={this.state.q5 === "3"}
                                onChange={this.handleq5Change}
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label className >Warm water</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="I generally don't shower for longer that 5 minutes and I rarely take a bath."
          value="1"
                                checked={this.state.q6 === "1"}
                                onChange={this.handleq6Change}
        />
        <Form.Check
          type="radio"
          label="I love standing under the shower for a good 20 minutes - but in exchange I rarely have baths."
          value="2"
                                checked={this.state.q6 === "2"}
                                onChange={this.handleq6Change}
        />
        <Form.Check
          type="radio"
          label="I often have baths - but in exchange I shower less often and only have short showers."
          value="3"
                                checked={this.state.q6 === "3"}
                                onChange={this.handleq6Change}
        />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label class="top1">Heating</Form.Label>
    <br/>



    <Form.Check
          type="radio"
          label="In winter, I wear a pullover when I am at home (18-20°C)."
          value="1"
                                checked={this.state.q7 === "1"}
                                onChange={this.handleq7Change}
        />
        <Form.Check
          type="radio"
          label="In winter, it is pleasantly warm in my home (20-22°C)."
          value="2"
                                checked={this.state.q7 === "2"}
                                onChange={this.handleq7Change}
        />
        <Form.Check
          type="radio"
          label="I can sit in my living room with just a T-shirt in winter (over 22°C)."
          value="3"
                                checked={this.state.q7 === "3"}
                                onChange={this.handleq7Change}
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
