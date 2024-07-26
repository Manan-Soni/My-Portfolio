import React from 'react';
import linkedinImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\linkedin.png'
import instaImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\instagram.png'
import githubImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\canva_github.png'

export default function Hero() {
  return (
    <>
    <div id='div_hero'>
      <div id='div_socialmedia'>
          <table>
            <tr>
              <td><a href='https://www.linkedin.com/in/manan-soni-2b4495217/' target='_blank'><img src={linkedinImg} className='social_img' /></a></td>
              <td><a href='https://www.instagram.com/nansomani?utm_source=qr&igsh=dDNpYm1zcGtkZGd5' target='_blank'><img src={instaImg} className='social_img' /></a></td>
              <td><a href='https://github.com/Manan-Soni' target='_blank'><img src={githubImg} className='social_img' /></a></td>
            </tr>
          </table>
      </div>
      <p id='hero_p' ><b>Hello,I'm <span style={{color:'green'}}>Manan Soni.</span></b></p>
      <h2 id='hero_h2'><b>Welcome to my website!</b></h2>
    </div>
    </>
  )
}
