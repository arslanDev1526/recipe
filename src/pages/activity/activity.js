import React from 'react'
import { Container } from "react-bootstrap";
import styles from "./activity.module.css"

const Activity = () => {
  return (
<> 
<Container className=' text-center mt-5'> 

<div className={`${styles.container}`}> 
<h1 className='pt-5'>Activity </h1>
<p> No Message yet </p>
</div>

</Container>

</>
  )
}

export default Activity