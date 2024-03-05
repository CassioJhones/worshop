export default function Perfil() {
    return (
        <div className="flex flex-col rounded-xl my-3 bg-slate-800 border-none h-[328px] w-[294px]"  >
          
            <div className="flex flex-col bg-red-400 h-[72px] overflow-clip">
                <img src="/public/coqueiros.jfif" className="" />
            </div>
            
            <div className="flex flex-col align-middle justify-center items-center">
                <img src="/ator.png"  className=" h-[70px] mt-[50px] mb-[13px]"/>
                <p className="font-bold font-sans text-white text-lg">Leslie Alexander</p>
                <p className="font-sans font-semibold text-lg text-slate-500 mb-[50px]">UI Designer</p>
            </div>
        </div>
    )
}