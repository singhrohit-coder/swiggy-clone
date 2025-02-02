

const MindShimmer = () => {
    return(
        <div>
         <div className='w-full h-56 mt-5 animate bg-white rounded-3xl'></div>
         <div className="w-[80%] mx-auto py-6 flex flex-wrap gap-10 items-center justify-center">
                {
                Array(12).fill("").map((data ,i)=>(<div key={i} className="w-[295px] animate h-[182px]  rounded-md"></div>))
                }
        </div>

        </div>
    );
};

export default MindShimmer;