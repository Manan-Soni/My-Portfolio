import React from 'react'
import reactImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_react.png';
import jsImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_js.png';
import pyImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_python.png';
import dockerImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_docker.png';
import mysqlImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_mysql.png';
import muiImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_mui.png';

export default function Allinone() {
  return (
    <div id='div_allinoneMain'>

        

        <div>
            <table style={{marginLeft:'2vw', marginTop:'10vh'}}>
                <tr>
                    <td id='block'>
                        <table style={{width:'22vw', height:'35vh'}} id='AIO_table'>
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
                    </td>

                    <td id='block'>
                        <table style={{width:'22vw',height:'35vh'}} id='AIO_table'>
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
                    </td>
                </tr>

                <tr>
                <td id='block'>
                        <table style={{width:'22vw',height:'35vh'}} id='AIO_table'>
                            <tr>
                            <th className='AIO_heading'>Contact Me</th>
                            </tr>
                        </table>
                    </td>
                    
                </tr>

            </table>
        </div>
    </div>
  )
}
