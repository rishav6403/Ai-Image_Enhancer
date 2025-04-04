import React from 'react'

const ImageUpload = (props) => {
  const showImageHandler= (e)=>{
    const file = e.target.files[0];
    if(file){
      props.uploadImageHandler(file)
    }

  }
  return (
    <div className='w-full max-w-2xl p-6 rounded-2xl border border-gray-300 shadow-2xl bg-white '>
      <label htmlFor="fileInput" className='block border-2 border-dashed rounded-lg cursor-pointer w-full p-6 hover:border-blue-500 transition-all'>

      <p className='text-center'>Click or drag image to upload</p>
      <input type="file" id="fileInput" className='hidden'onChange={showImageHandler}/>
      </label>
    </div>
  )
}

export default ImageUpload
