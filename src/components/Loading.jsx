import React from 'react'

const Loading = () => {
  return (
<>
<div className='flex justify-center items-center h-full'>
  <div className='animate-spin w-10 h-10 border-4 rounded-full border-red-300 border-t-transparent scale-150'></div>
</div>
</>
  )
}

export default Loading
