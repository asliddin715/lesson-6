import React from 'react'

const page = () => {
    return (
        <div className="flex justify-center flex-col m-[auto] ">
            <div className="flex justify-center flex-col m-[auto] text-center mt-[160px] mb-[100px] ">
                <h1 className="text-[64px] font-[700] font-[Inter, sans-serif;] w-[610px] mb-[20px]">Become a better business with us.</h1>
                <p className="text-[21px] font-[400] font-[Inter, sans-serif;] w-[570px] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis tortor, ultricies ut justo eu.</p>
                <button className="border-solid border-2 bg-[#6610F2] w-[260px] m-[auto] py-[10px] px-[20px] text-[white] rounded-[150px]">Our Business</button>
            </div>

            <div className="mb-[140px]">
                <img src="/g-j.png" alt="busnise" />
            </div>

            <div className='px-[100px]'>
                <div className='mb-[180px]'>
                    <h2 className='text-[58px] font-[700] font-[Inter, sans-serif;] w-[1000px] pl-[160px]'>Here is what’s happening in the world of talk business.</h2>
                </div>

                <div className='flex flex-col gap-[80px]'>
                    <div className='flex items-start justify-end gap-[100px]'>
                        <div>
                            <p className='text-[#6610F2] text-[16px] font-[700] font-[Inter, sans-serif;]'>MAY 2021</p>
                            <h4 className='text-[24px] font-[700] font-[Inter, sans-serif;] w-[218px] mt-[20px]'>Agile focused business services and more.</h4>
                        </div>

                        <div>
                            <img src="/work.png" alt="loading" />
                        </div>
                    </div>

                    <div className='flex items-start justify-end gap-[100px]'>
                        <div>
                            <p className='text-[#6610F2] text-[16px] font-[700] font-[Inter, sans-serif;]'>MAY 2021</p>
                            <h4 className='text-[24px] font-[700] font-[Inter, sans-serif;] w-[218px] mt-[20px]'>Agile focused business services and more.</h4>
                        </div>

                        <div>
                            <img src="/work.png" alt="loading" />
                        </div>
                    </div>

                    <div className='flex items-start justify-end gap-[100px]'>
                        <div>
                            <p className='text-[#6610F2] text-[16px] font-[700] font-[Inter, sans-serif;]'>MAY 2021</p>
                            <h4 className='text-[24px] font-[700] font-[Inter, sans-serif;] w-[218px] mt-[20px]'>Agile focused business services and more.</h4>
                        </div>

                        <div>
                            <img src="/work.png" alt="loading" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page