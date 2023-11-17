function Body1() {
  return (
    <div className='flex gap-20' style={{backgroundColor: "rgb(243,243,249)"}}>
        <div className='left my-auto p-10'>
          <div className="flex">
          <h4 className='font-bold text-blue-1000'>DO-IT-YOURSELF</h4> <img className="h-3 ml-7 mt-2" src="./images/line.png" alt="" />
          </div>
            
            <h1 className='font-bold text-blue-1000 text-6xl my-5'>Easily create <br /> professional <br /> videos</h1>
            <h4 className=''>
            Create videos that engage and impress. Animoto's drag-and-drop editing tools and visual effects make it easy. No training or experience necessary.
            </h4>
            <button className='my-10 m-auto btn bg-blue-900 w-40 h-10 text-white rounded-full'>GET STARTED FREE</button>
        </div>
        <div className="right mr-20 p-10">
            <video className='mt-20' autoPlay loop muted controls width="1000" src="https://d2of6bhnpl91ni.cloudfront.net/cms/animoto-free-online-video-maker-e8d6870030.mp4" type="video/mp4"></video>
        </div>
    </div>
  )
}

export default Body1