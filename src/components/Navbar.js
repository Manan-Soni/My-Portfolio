import React from 'react';
import logoImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\Manan_3.png';
export default function Navbar() {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg" style={{backgroundColor:'#82b2ab'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logoImg} style={{width:'45px'}} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#div_techstackMain">Tech Stack</a>
              <a class="nav-link active" aria-current="page" href="#div_projects">Projects</a>
              <a class="nav-link active" aria-current="page" href="#div_contactme">Contact me</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
