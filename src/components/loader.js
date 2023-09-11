import React from 'react'

import { Oval } from  'react-loader-spinner'



const Loader = () => {
  return (
  <>

  <Oval
  height={100}
  width={100}
  color="#FFA500"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#FFA500"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>

  </>
  )
}

export default Loader