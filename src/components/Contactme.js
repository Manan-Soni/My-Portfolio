import React from 'react'
import axios from 'axios'

/*
const contactForm = () => {
  const [formData, setFormData] = useState(
    {
      name:'',
      email:'',
      message:''
    })};
    
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({ ...formData, [name]:value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('https://localhost:5000',formData).then(response => {alert('Mail sent succesfully');})
};

*/

export default function Contactme() {
  return (
  <div id='div_contactme'>
    <br/><br/>
    <p id='heading_contact' style={{textAlign:'center'}} className='heading'>Feel free to reach out!</p>
    <div id='contactme'>
      <form id='form_contact'>
        <input type='text' placeholder='Name' id='name' className='form_input' style={{borderRadius:'12px', opacity:'70%'}} />
        <input type='email' placeholder='Email' id='email' className='form_input' style={{borderRadius:'12px', opacity:'70%'}}/>
        <br />
        <textarea placeholder='Message' id='message' className='form_input' cols='100' rows='5' style={{borderRadius:'12px', opacity:'70%'}} />
        <br /><br />
        <input type="submit" value="Submit" style={{marginBottom:'15px', borderRadius:'12px'}}/>
      </form>
    </div>
  </div>
  )
}
