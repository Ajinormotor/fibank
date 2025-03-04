// import React from 'react'

const chooseUsData = [
    {
      title: "Unmatched Expertise",
      desc: "Our team of crypto experts constantly monitors the market to provide",
      icon: "ri-wallet-line"
    },
    {
      title: "Secure Transactions",
      desc: "We use cutting-edge encryption and blockchain technology to ensure safe and seamless transactions.",
      icon: "ri-shield-check-line"
    },
    {
      title: "24/7 Customer Support",
      desc: "Our dedicated support team is available around the clock to assist with any queries or concerns.",
      icon: "ri-customer-service-2-line"
    },
    {
      title: "Instant Withdrawals",
      desc: "Enjoy fast and hassle-free withdrawals, ensuring quick access to your funds whenever you need them.",
      icon: "ri-exchange-dollar-line"
    },
    {
      title: "Low Fees & High Returns",
      desc: "We offer competitive trading fees and high-yield investment options to maximize your profits.",
      icon: "ri-bar-chart-line"
    },
    {
      title: "User-Friendly Platform",
      desc: "Our intuitive interface makes crypto trading easy for beginners and professionals alike.",
      icon: "ri-smartphone-line"
    }
  ];

export default function ChooseUs() {
  return (
<section className="min-h-[300px] w-full flex flex-col items-center justify-center gap-15 py-15 p-3 ">

    <div className="flex flex-col gap-3 items-center justify-center text-center">

        <div className="flex items-center gap-2">
        
            <i className="ri-rocket-line text-[#aeff1c] text-xl font-bold  rotate-30"></i>
            <h1 className="text-base font-bold text-[#65c800] uppercase">Why choose us</h1>
        </div>

        <h1 className="md:text-[48px] text-[30px]">Why choose FinPoan Crypto
        </h1>
    

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5">
        {
            chooseUsData.map((c,index) => (
                <div key={index}
                 className="flex flex-col gap-4 items-center justify-center  rounded-lg h-[233px] hover:border-[#aeff1c] cursor-pointer
                 max-w-[764px] text-center border-[1px] border-[#666666]">
                    
                    <i class={` ${c.icon} text-[#aeff1c] font-bold text-4xl`}></i>
                    <h1 className="text-[28px] text-white">{c.title}</h1>
                    <p className="text-base text-[#999999]">{c.desc}</p>

                </div>
            ))
        }

    </div>

</section>
  )
}

