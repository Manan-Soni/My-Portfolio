import React from 'react'
import reactImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_react.png';
import jsImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_js.png';
import pyImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_python.png';
import dockerImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_docker.png';
import mysqlImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_mysql.png';
import muiImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_mui.png';

export default function Techstack() {
  return (
    <div id='div_techstackMain'>
      <br/><br/>
      <p id='heading_techstack' className='heading gradient-border'>My Techstack</p>
      <div id='div_techstack'>
        <table style={{width:'50vw',height:'65vh',marginLeft:'5.3vw'}}>
          <tr>
            <td><img src={dockerImg}  className='techstack_img' /></td>
            <td><img src={reactImg} className='techstack_img'/></td>
            <td><img src={jsImg}  className='techstack_img'/></td>
            
          </tr>
          <tr>
            <td><img src={pyImg} className='techstack_img' /></td>
            <td><img src={mysqlImg} className='techstack_img' /></td>
            <td><img src={muiImg} className='techstack_img' /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
