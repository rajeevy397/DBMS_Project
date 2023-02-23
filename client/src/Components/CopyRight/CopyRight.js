import React from 'react'
import './CopyRight.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Rajeev from '../../img/rajeev.JPG'

function CopyRight() {
  return (
    <div className='MainIntro'>
        <div className="intro">
        <h1>Made with Love By Rajeev Yadav</h1>
        <h3>Database Management System Project</h3>
        <div className="f-icons">
          <a href="https://www.instagram.com/rajeevyadav__/?hl=en">
            <Insta color="Black" size="3rem" />
          </a>
          <a href="https://github.com/rajeevy397">
            <Github color="Black" size="3rem" />
          </a>
          <a href="https://www.facebook.com/rajeev.yadav.58958343">
            <Facebook color="Black" size="3rem" />
          </a>
        </div>
        </div>
        <div className="imgIntro">
        <img className='rajeev' src={Rajeev} alt="" />
        </div>
    </div>
  )
}

export default CopyRight