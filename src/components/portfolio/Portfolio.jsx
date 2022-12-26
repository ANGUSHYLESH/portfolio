import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assets/project1.jpg"
import IMG3 from "../../assets/project3.jpg"
import IMG5 from "../../assets/project5.jpg"
import IMG6 from "../../assets/project6.jpg"
import IMG7 from "../../assets/project7.jpg"
import IMG8 from "../../assets/project8.jpg"

const data = 
[
  { id: 1, image: IMG1, title: 'Portfolio', github: "https://github.com/ANGUSHYLESH/portfolio", demo: "https://portfolio-mu-three-96.vercel.app/" },

  { id: 2, image: IMG3, title: 'Cloud Kitchen', github: "https://github.com/ANGUSHYLESH/Food_Order", demo: "https://food-order1-d3wcughr3-angushylesh.vercel.app/" },

  { id: 3, image: IMG7, title: 'Social Media', github: "https://github.com/ANGUSHYLESH/media-app", demo: "https://github.com/ANGUSHYLESH/media-app" },

  { id: 4, image: IMG8, title: 'Write Your Own BLog', github: "https://github.com/ANGUSHYLESH/blog-site", demo: "https://github.com/ANGUSHYLESH/blog-site" },

  { id: 5, image: IMG5, title: 'Track Expenses', github: "https://github.com/ANGUSHYLESH/expense-tracker", demo: "https://expense-tracker-eight-green.vercel.app/" },
  
  { id: 6, image: IMG6, title: 'Make a Note', github: "https://github.com/ANGUSHYLESH/note-making-application", demo: "https://note-making-application-gzpqga83g-angushylesh.vercel.app/" },
]





const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">





        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item' >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} srcset="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} target="_blank" className='btn' alt="" rel="noreferrer">Github link</a>
                  <a href={demo} target="_blank" rel="noreferrer" className='btn btn-primary' alt="">Live Demo</a></div>
              </article>
            )
          })




        }



      </div>
    </section>
  )
}

export default Portfolio