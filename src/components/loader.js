import React from 'react'

import { Oval } from  'react-loader-spinner'



const Loader = () => {
  return (
  <>
  <div className='mt-5'> 
  <Oval
  height={200}
  width={200}
  color="#FFA500"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#FFA500"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
</div>
  </>
  )
}

export default Loader