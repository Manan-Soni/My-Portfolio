import React from 'react'
import encryptImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\encryp_sys.png';
import llmImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\LLM.png';
import gamedevImg from 'D:\\React\\myresume_new\\src\\assets\\logos\\gamedev.png';

export default function Projects() {
  return (
      <div id='div_projects'>
        <br/><br/>
          <p id='heading_Projects' className='heading'>Projects</p>
          <table>
            <tr>
              <td>
                <div className="card" id='project_card'>
                <a href="https://github.com/Manan-Soni/Unreal-Engine.git" target='_blank'><img src={gamedevImg} className="card-img-top" alt="Game Development" /></a>
                </div>  
              </td>

              <td>
                <div className="card" id='project_card'>
                <a href="https://github.com/Manan-Soni/LLM-model.git" target='_blank'><img src={llmImg} className="card-img-top" alt="Large Language Model" /></a>
                </div>
              </td>

              <td>
                <div className="card" id='project_card'>
                <a href="https://github.com/Manan-Soni/Encryption-System.git" target='_blank'><img src={encryptImg} className="card-img-top" alt="Large Language Model" /></a>
                </div>
              </td>

            </tr>
          </table>
      </div>
  )
}
