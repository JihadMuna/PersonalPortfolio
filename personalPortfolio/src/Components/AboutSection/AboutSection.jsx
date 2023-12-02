import React from 'react'
import './AboutSection.css'
import MyPic from '../../assets/MyPic.jpg';

export default function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <section>
      <h2>About Me :</h2>
      <section className="photo-container">
        <img src={MyPic} alt="My Photo" />
      </section>
      </section>
      <div className='text-container'>
      <p>I love learning and exploring the world of programming. <br />
       I'm passionate about using code to solve problems and create cool things. <br />
       I'm always eager to learn new things and take on challenges that help me grow both personally and professionally. <br />
In the ever-changing tech world, I believe that each line of code is a chance to make something impactful and innovative. <br />
 Outside of the digital space, I also enjoy doing makeup. <br />
  It's a creative outlet for me, and in my free time, I love learning and trying out different makeup techniques. <br />
   I often have fun experimenting with makeup on my sisters and friends, turning our leisure moments into beautiful and creative expressions.</p>
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
