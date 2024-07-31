import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center flex-col m-[auto] ">
      <div className="flex justify-center flex-col m-[auto] text-center mt-[160px] mb-[100px] ">
        <h1 className="text-[64px] font-[700] font-[Inter, sans-serif;] w-[610px] mb-[20px]">Become a better business with us.</h1>
        <p className="text-[21px] font-[400] font-[Inter, sans-serif;] w-[570px] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis tortor, ultricies ut justo eu.</p>
        <button className="border-solid border-2 bg-[#6610F2] w-[260px] m-[auto] py-[10px] px-[20px] text-[white] rounded-[150px]">Our Business</button>
      </div>

      <div className="mb-[140px]">
        <img src="/job.png" alt="busnise" />
      </div>

      <div>

      </div>

      <div>

      </div>

      <div className="px-[100px]">
       <div className="text-center">
       <a className="text-[16px] font-[700] font-[Inter, sans-serif] text-[#6610F2]" href="#">Services</a>
       <h2 className="text-[58px] font-[700] font-[Inter, sans-serif] w-[630px] m-[auto]">We provide or a huge list of services.</h2>
       </div>
        <div className="flex items-center justify-between mt-[50px]">
          <div className="w-[355px] text-center">
           <div className="w-[100px]  h-[100px] mb-[30px] rounded-[500px] bg-[#E0CFFC] flex justify-center items-center m-[auto]">
           <img className="   w-[59px] h-[59px]" src="/data.png" alt="laoding" />
           </div>
            <h4 className="mb-[15px] text-[20px] font-[600] font-[Inter, sans-serif;]">Lorem ipsum dolor</h4>
            <p className="text-[16px] font-[400] font-[Inter, sans-serif;]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis</p>
          </div>

          <div className="w-[355px] text-center">
           <div className="w-[100px]  h-[100px] mb-[30px] rounded-[500px] bg-[#E0CFFC] flex justify-center items-center m-[auto]">
           <img className="   w-[59px] h-[59px]" src="/data.png" alt="laoding" />
           </div>
            <h4 className="mb-[15px] text-[20px] font-[600] font-[Inter, sans-serif;]">Lorem ipsum dolor</h4>
            <p className="text-[16px] font-[400] font-[Inter, sans-serif;]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis</p>
          </div>

          <div className="w-[355px] text-center">
           <div className="w-[100px]  h-[100px] mb-[30px] rounded-[500px] bg-[#E0CFFC] flex justify-center items-center m-[auto]">
           <img className="   w-[59px] h-[59px]" src="/data.png" alt="laoding" />
           </div>
            <h4 className="mb-[15px] text-[20px] font-[600] font-[Inter, sans-serif;]">Lorem ipsum dolor</h4>
            <p className="text-[16px] font-[400] font-[Inter, sans-serif;]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis</p>
          </div>
        </div>
      </div>

    </div>
  );
}
