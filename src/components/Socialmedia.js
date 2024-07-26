import React from 'react'
import linkedinImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\linkedin.png'
import instaImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\instagram.png'
import githubImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\github.png'

export default function Socialmedia() {
  return (
    <div id='div_socialmedia'>
        <table>
          <tr>
            <td><a href='https://www.linkedin.com/in/manan-soni-2b4495217/' target='_blank'><img src={linkedinImg} className='social_img' /></a></td>
          </tr>
        </table>
    </div>
  )
}
