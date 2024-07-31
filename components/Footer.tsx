import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className=" max-w-[1440px] m-[auto] bg-[#160530] px-[80px] py-[50px]">
          <div className="flex justify-between items-start">
            <div className="w-[576px]">
              <h2 className="text-[58px] font-[600] font-[Inter, sans-serif] mb-[20px] text-[white]">Let’s start working to build a brighter future.</h2>
              <p  className="text-[16px] font-[400] font-[Inter, sans-serif] mb-[20px] w-[456px] text-[white]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget elementum vulputate elementum viverra sapien tellus aenean.</p>
              <p  className="text-[16px] font-[700] font-[Inter, sans-serif] mb-[180px]  text-[white]">Fb           In         Tw         Ln</p>
              <img src="/logo-b.svg" alt="laoding" />
            </div>

            <div className="">
              <input className="w-[597px]  p-[20px] bg-transparent border-solid border-2 mt-[100px] mb-[440px]" type="text" placeholder="Join our mailing list" />
              <p  className="text-[14px] font-[400] font-[Inter, sans-serif] text-end  text-[white]">Copyright 2021. All rights reserved.</p>
            </div>

          </div>
        </div>
    </div>

  )
}

export default Footer