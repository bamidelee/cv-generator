import React from 'react';
import { Details } from './components/detail';
import './styles/App.css';
import {Overview} from './components/overview';
import {Form} from './components/form';
import pic from './profile.jpg';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      editing :''
      ,
          name:'Olalere Barakat',
          image:'',
          email: 'olarex7@gmail.com',
          skill: 'Business process improvement/Microsoft office/Project scheduling/Leadership/Strategic planning',
          location: 'Lagos, Nigeria',
          phone: '08000000000',
          summary: 'Proactive, self-motivated, and goal-oriented team player offering an understanding of management and ability to perform at high level in challenging environments to improve communication and efficiency within the organization',
          school:'Lagos state university',
          degree:'B.Ed Educational Management',
          DOS: '2022-01-01',
          company:'Banjolat friendship academy',
          position: 'Teacher',
          duty: 'Planned lessons within the objectives of the curriculum helping to improve 11-plus scores by 15% over a two-year period./Worked with colleagues to identify areas for improvement in Key Stage 1 assessment, increasing focus on reading to achieve a 20% increase in judgements of ‘Working at Greater Depth within the Expected Standard’.Established relationships of trust and understanding with challenging students to aid learning./Used energetic and engaging teaching methods to ensure students remained disciplined and attentive./Provided parents with feedback, taking into account their needs and incorporating this into lesson planning wherever possible./Incorporated up-to-date tech enhancements in delivering lessons, including extensive use of interactive whiteboards.',
          from :'2022-01-01',
          to: '2022-01-01',
    };
  }
  editing = (e) =>{
    e.preventDefault()
      this.setState({
        editing: e.target.id
      })
  
  }
  onsubmit = (e) =>{
    e.preventDefault()
    this.setState({
     
      editing: '',

    })
  }
  change = (e,att) =>{
   this.setState({
        [att]: e.target.value
   })
  }
  skillSet = () =>{
    const split = this.state.skill.split('/')
    return split;
  }
  dutySet = () =>{
    const split = this.state.duty.split('/')
    return split;
  }
  render(){
    const {name,email,phone,editing, school, degree, DOS, company, position, duty, from, to, image, location, skill, summary} = this.state;
    
    return (
      <div className='content'>
        <div class="input">
          <h1>
            CV-MAKER
          </h1>
          <div className='section1'>
          <img src={image} className='input-image'/>
          <Details att='Name' detail={name} editing={editing} section='section1'/>
          <Details att='Email' detail={email} editing={editing} section='section1'/>
          <Details att='Phone Number' detail={phone} editing={editing} section='section1'/>
          <Details att='Location' detail={location} editing={editing} section='section1'/>
          <Details att='Skill' detail={skill} editing={editing} section='section1'/>
          <Details att='Summary' detail={summary} editing={editing} section='section1'/>
          <form>
            <Form label='Name' type='text' id='section1' edit={editing} change={(e)=>{this.change(e,'name')}} value={name}/>
            <Form label='Email' type='email' id='section1' edit={editing} change={(e)=>{this.change(e,'email')}} value={email}/>
            <Form label='Phone Number' type='telephone' id='section1' edit={editing} change={(e)=>{this.change(e,'phone')}} value={phone}/>
            <Form label='Upload image' type='file' id='section1' edit={editing} change={(e)=>{this.change(e,'image')}}/>
            <Form label='Location' type='text' id='section1' edit={editing} change={(e)=>{this.change(e,'location')}} value={location}/>
            <Form label='Skill' type='text' id='section1' edit={editing} change={(e)=>{this.change(e,'skill')}} value={skill}/>
            <Form label='Summary' type='text' id='section1' edit={editing} change={(e)=>{this.change(e,'summary')}} value={summary}/>
            <Overview edit={this.editing} submit={this.onsubmit} id='section1'/>
          </form>
          </div>
          <div className='section2'>
          <Details att='School' detail={school} editing={editing} section='section2'/>
          <Details att='Degree' detail={degree} editing={editing} section='section2'/>
          <Details att='Date of school' detail={DOS} editing={editing} section='section2'/>
          <form>
            <Form label='School' type='text' id='section2' edit={editing} change={(e)=>{this.change(e,'school')}} value={school}/>
            <Form label='Degree' type='text' id='section2' edit={editing} change={(e)=>{this.change(e,'degree')}}value={degree}/>
            <Form label='Date of study' type='date' id='section2' edit={editing} change={(e)=>{this.change(e,'DOS')}} value={DOS}/>
            <Overview edit={this.editing} submit={this.onsubmit} id='section2'/>
          </form>
          </div>
          <div className='section3'>
          <Details att='Company' detail={company} editing={editing} section='section3'/>
          <Details att='Position' detail={position} editing={editing} section='section3'/>
          <Details att='Duty' detail={duty} editing={editing} section='section3'/>
          <Details att='From' detail={from} editing={editing} section='section3'/>
          <Details att='To' detail={to} editing={editing} section='section3'/>
          <form>
            <Form label='Company' type='text' id='section3' edit={editing} change={(e)=>{this.change(e,'company')}} value={company}/>
            <Form label='Position' type='text' id='section3' edit={editing} change={(e)=>{this.change(e,'position')}} value={position}/>
            <Form label='Duty' type='text' id='section3' edit={editing} change={(e)=>{this.change(e,'duty')}} value={duty}/>
            <Form label='From' type='date' id='section3' edit={editing} change={(e)=>{this.change(e,'from')}} value={from}/>
            <Form label='To' type='date' id='section3' edit={editing} change={(e)=>{this.change(e,'to')}} value={to}/>
            <Overview edit={this.editing} submit={this.onsubmit} id='section3'/>
          </form>
          </div>
        </div>


        <div className="preview">
          <div className='preview-left'>
            {image === ''? <img src={pic} alt='profile pic' className='preview-image'/>: <img src={image} alt='profile pic' className='preview-image'/>}
            <div className='contact'>
            <h3>CONTACT</h3>
            <div className='phone'>
              <span className="material-symbols-outlined">
              call
              </span>{phone}
            </div>
            <div className='email'>
            <span className="material-symbols-outlined">
              mail
              </span>
              {email}
            </div>
            <div className='location'>
              <span className="material-symbols-outlined">
                location_on
             </span>
              {location}
            </div>
            </div>
            
            <div className='skill'>
              <h3>SKILL</h3>
              <ul>
              {this.skillSet().map((skill)=>{
                  return <li key={skill}>{skill}</li>
              })}
              </ul>
            </div>
          </div>
          <div className='preview-right'>
            <header>
              <h1>
                {name}
              </h1>
            </header>
            <div className='summary'>
              <h3>PROFESSIONAL SUMMARY</h3>
              {summary}
            </div>
            <div className='work'>
              <h3>WORK HISTORY</h3>
              <h4>{company}</h4>
              <div> FROM: <span>{from}</span></div>
              <div>TO: <span>{to}</span></div>
              <div>{
                  <ul>
                {this.dutySet().map((duty)=>{
                    return <li key={duty}>{duty}</li>
                })}
                </ul>}
              </div>
             
            </div>
            <div className='education'>
                <h3>EDUCATION</h3>
                <h4>School</h4>
                <div>{school}</div>
                <h4>Degree</h4>
                <div>{degree}</div>
                <h4>Date Of Graduation</h4>
                <div>{DOS}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
