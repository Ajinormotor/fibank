// import React from 'react'



const img_source = [
    {  path: 'https://hwp.creativegigstf.com/fibank/assets/img/media/media-4.jpg'},
    {path: "https://hwp.creativegigstf.com/fibank/assets/img/media/media-5.jpg"},
    {path: 'https://hwp.creativegigstf.com/fibank/assets/img/media/media-6.jpg'}
    

]
const Hero = () => {
  return (

   <section className="w-full min-h-[80vh] flex items-center justify-center">

    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 p-5 md:p-10">

        <div className="flex flex-col gap-6">
            <h1 className="lg:text-[75px] text-[40px] lg:leading-[75px] rakas">Top Financial Planning</h1>
            <p className="md:text-xl text-base rubik max-w-[600px]">Customized strategies to maximize wealth, reduce risks, and align finances with your life goals.</p>

            <div className=" flex md:h-[80px] h-[50px] max-w-[666px] w-full border-[2px] border-white bg-black">
                <input type="text" placeholder="Enter Your Mail"
                className="w-full bg-black outline-none h-full px-3"  />
                <button className='h-full md:max-w-[182px] w-[150px] md:w-full flex items-center  bg-[#aeff1c]
    justify-center py-3 md:px-[30px]  cursor-pointer'>
        <h1 className='text-black rakas font-bold uppercase text-sm md:text-[18px]'>Contact us</h1>
    </button>
            </div>


<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    

            <div className="flex items-center">
                <ul className="flex">

                    { img_source.map((n,index) => (
                    <li className={`rounded-[50%] w-[100px] h-[100px] relative `} 
                    key={index}
                    style={{ left: `-${index * 35}px`}}
                    
                    > <img 
                    src={n.path}
                    alt="" className="md:w-[130px] md:h-[100px]  rounded-[50%] absolute  z-10"/></li>
                ))
                    }  
       
                </ul>
                
            </div>

            <div className="flex flex-col ">

                <ul className="flex gap-1"l>
                    <li><i className="ri-star-line text-xl md:text-4xl"></i></li>
                    <li><i className="ri-star-line text-xl md:text-4xl"></i></li>
                    <li><i className="ri-star-line text-xl md:text-4xl"></i></li>
                    <li><i className="ri-star-line text-xl md:text-4xl"></i></li>
                    <li><i className="ri-star-line text-xl md:text-4xl"></i></li>
                    
                </ul>
                <div className="flex items-center gap-1 ">
                    <h1 className="md:text-[22px] text-xl tex-white font-semibold">13k rating</h1>
                    <p className="text-xl md:text-[22px] text-[#999999] opacity-80">(4.7 Rating)</p>
                </div>

            </div>

            </div>

            <div className="flex gap-2  items-center">

            <button className='h-[52px] max-w-[159px] w-full rounded-[40px] flex items-center  bg-[#aeff1c]
    justify-center py-3 px-5  cursor-pointer'>
        <h1 className='text-black rakas font-bold'>Book a meeting</h1>
    </button>

    <button className='h-[52px] max-w-[159px] w-full rounded-[40px] flex items-center  border-[1px] border-[#aeff1c]
    justify-center py-3 px-5  cursor-pointer'>
        <h1 className='text-white rakas font-bold'>Watch Video</h1>
    </button>

            </div>

        </div>


{/* image div */}
        <div className="max-w-[610px] max-h-[605px] relative lg:m-10">
            <img src="https://hwp.creativegigstf.com/fibank/assets/img/hero/hero-img-6.jpg" alt=""
            className="lg:w-[610px] lg:h-[605px] object-fit" 
            />
<img src="https://hwp.creativegigstf.com/fibank/assets/img/hero/card-4.png" alt=""
            className="md:max-w-[250px] w-[150px] md:w-full md:h-[157px]  
            object-fit absolute top-[10px] -right-5 md:-right-[69px]" 
            />

<img src="https://hwp.creativegigstf.com/fibank/assets/img/hero/card-3.png" alt=""
            className="md:max-w-[360px] w-[220px] md:w-full md:h-[277px]
              object-fit absolute -bottom-[15px] md:-left-[90px]  -left-[40px]" 
            />

        </div>

    </div>

   </section>
  )
}

export default Hero