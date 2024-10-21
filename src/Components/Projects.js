import React from 'react';
import ProjectBox from './ProjectBox';
import work1 from '../images/work1.png'
import work2 from '../images/work2.jpg'
import work3 from '../images/work3.png'
import work4 from '../images/work4.png'


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Work</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={work1} projectName="Benzer" />
        <ProjectBox projectPhoto={work2} projectName="Themount" />
        <ProjectBox projectPhoto={work3} projectName="Stack" />
        <ProjectBox projectPhoto={work4} projectName="Dates" />

      </div>

    </div>
  )
}

export default Projects