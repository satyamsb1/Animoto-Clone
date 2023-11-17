
function Body3() {
  return (
    <>
    <h1 className='text-center text-4xl font-bold text-blue-900 m-10 mt-14'>Create stunning videos in four easy steps</h1>
    <img className="m-auto"src="./images/line.png" alt="" />
    <div className='1 flex w-3/4 m-auto gap-10 my-10'>
        <div className='text'>
            <h1 className='text-4xl items-left font-bold my-10 text-blue-900 '>
            1. Drag and drop your media 
            </h1>
            <h4 className='text-xl'>
            Easily upload from your computer or import from cloud storage. Fill in any blanks with our Getty Images stock library, or built-in screen recorder.
            </h4>
            <button className='h-9 border border-blue-900 text-blue-900 font-medium w-2/3 rounded-full mt-6 items-center hover:bg-blue-900 hover:text-white'>
  GET STARTED FREE
</button>

        </div>
        <div className='video'>
            <video controls width="1500" autoPlay loop muted src="https://d2of6bhnpl91ni.cloudfront.net/cms/drag-and-drop-media-with-free-video-maker-06535152a6.mp4"></video>
        </div>
    </div>
    </>
  )
}

export default Body3