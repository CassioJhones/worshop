export default function CardCentral(props) {
    return (

        <div className=" flex flex-row gap-20 items-center w-full justify-between bg-slate-800 p-12 rounded-2xl">
            <div className="flex items-center gap-2">
                <img src={props.Imagem} className=" h-[70px]" />

                <div className="flex flex-col text-white mx-5">
                    <h1 className="font-bold text-2xl">{props.Nome}</h1>
                    <h2 className="font-normal text-lg">{props.Cargo}</h2>
                </div>
            </div>

            <button className="bg-green-700 text-lg h-16 rounded-2xl px-9 text-white font-semibold items-end hover:bg-green-600">
                {props.botaoTitle}
            </button>
        </div>
    )
}