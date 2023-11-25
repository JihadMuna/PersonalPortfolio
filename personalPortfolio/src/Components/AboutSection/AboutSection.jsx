import React from 'react'
import './AboutSection.css'
import MyPic from '../../assets/MyPic.jpg';

export default function AboutSection() {
  return (
    <section className='about-section'>
      <h2>About Me :</h2>
      <div className="photo-container">
        <img src={MyPic} alt="My Photo" />
      </div>
      <div className='text-container'>
      <p>I am an avid learner and enthusiast of programming,<br />
       driven by an unwavering passion for crafting solutions through code. <br />
       With a perpetual thirst for knowledge, I constantly seek opportunities  <br />
       to broaden my skill set and embrace challenges that foster personal and professional growth. <br />
       As I navigate the dynamic world of technology, I am fueled by the belief that each line of code <br />
        is an opportunity to create something impactful and innovative.
<br /> Beyond the digital realm, I find joy in the artistry of makeup. <br />
 During my leisure time, I immerse myself in learning and applying makeup techniques, <br />
  transforming it into a creative outlet. <br />
  Sharing this passion, I often experiment with makeup on my sisters and friends, <br />
   turning moments of leisure into expressions of beauty and creativity.</p>
<ul>My Skills:
    <li>Full Stack Development: 
"HTML, CSS, JavaScript, React".</li>
<li>Problem Solving and Algorithmic Thinking.</li>
<li>Continuous Learning and Adaptability.</li>
</ul>
<ul>Interests:
<li>Exploring new programming languages and technologies.</li>
<li>The art and science of makeup application.</li>
</ul>
</div>
    </section>
  )
}
