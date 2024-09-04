import React from 'react'
import { Container } from 'reactstrap'
import '../../../../src/styles/common-section.css'


const CommonSection = (props) => {
  return (
    <section className='common-section'>
        <Container>
             
           <div>
           <h2 className='text-center' style={{fontSize: '55px', color:'white'}}>{props.title}</h2>
          
            </div> 
            

        </Container>
    </section>
  )
}

export default CommonSection