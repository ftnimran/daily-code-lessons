import React from 'react'
import backGround2 from '../assets/image/background_image02.png'

const Section = () => {
  return (
    <section id="about" class="about">

      <div className='section-title'>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        <div class="about-img">
          <img src={backGround2} />
        </div>

        <div class="about-text">
          <h1>I'am  Imran</h1>
          {/* <h2>MERN Stack Developer!</h2> */}
          <p>I am a skilled web designer with over 3 years of experience in the industry. My passion lies in creating
            captivating website designs and implementing them through frontend development. Itake pride in staying
            up-to-date with current design trends and leveraging my creativity to produce visually appealing and
            user-friendly websites. Throughout my career, I have developed a deep understanding of user experience
            (UX) and user interface (UI) principles. By putting myself in the shoes of the end-users, I strive to
            create intuitive and seamless browsing experiences. I believe that a well-designed website should not
            only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When
            starting a new project, I thoroughly research and analyze the target audience and the client's specific
            requirements. This enables me to tailor my designs to meet their expectations and deliver a unique
            online presence that aligns with their brand identity..</p>
          <a href="#" class="btn-box">More About Me</a>
        </div>
      </div>

    </section>
  )
}

export default Section
