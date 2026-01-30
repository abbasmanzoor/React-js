import React from 'react'
import Left_content from './Left_content'
import Right_content from './Right_content'

const Page1_content = () => {
  return (
      < div className='flex justify-between px-20 mt-20 items-center bg-amber-300 '>
        <Left_content />
        <Right_content  />
    </div>
  )
}

export default Page1_content