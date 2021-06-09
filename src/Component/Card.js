import { useState } from 'react'
import profileImg from '../image/profile.jpg'
import Button from './Button'
import './style/Card.css'


const Card = () => {

  const [data, setData] = useState('Genny');
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1 )
  }

  const handleName = () => {
    setData('Hi, I am Genny')
  }

  const handleSkills = () => {
    setData('I am a Web Developer')
  }

  return (
    <>
        <div className="card">
        <div className="image-container">
            <img src={profileImg} alt="profile" />
          </div>
          <div className="lower-container">
            <h4>{ data }</h4>

            <div className="btn-container">
              <Button btnName="Name" handleClick={handleName} />
              <Button btnName="Skills" handleClick={handleSkills} />
            </div>
            <div className="likes">
            <h4>{ count }</h4>
              <Button handleClick={handleCount} icon="fas fa-heart" />
            </div>
            <div className="social-icons">
              <i class="fab fa-twitter" id="twitter"></i>
              <i class="fab fa-linkedin-in" id="linkedin"></i>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card