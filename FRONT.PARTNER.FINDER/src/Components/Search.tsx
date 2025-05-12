import { MagnifyingGlass } from "phosphor-react";

export function Search() {
    return (
        <div className="h-[45vh] flex items-center justify-center gap-10">
            <div className="w-[30vw] flex items-center justify-center">
                <img src="Shopping-Shipping-01--Streamline-Bangalore 1.svg" alt="" />
            </div>
            <div className="w-[40vw] flex flex-col items-center gap-10">
                <h1 className="text-[34px] text-center font-bold">CONSULTE O PARCEIRO MAIS PRÓXIMO E TENHA O SEU PRODUTO EM MÃOS RAPIDINHO</h1>
                <div className="relative w-[30vw]">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <MagnifyingGlass size={18} />
                    </span>
                    <input
                        type="text"
                        className="border rounded pl-10 pr-4 py-2 bg-gray-100 w-full"
                        placeholder="Insira o CEP para buscar parceiros próximos"
                    />
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-300 py-2 px-4 rounded hover:bg-blue-700 transition-all ease-in-out">Buscar</button>
                </div>
            </div>
            <div className="w-[30vw] flex items-center justify-center">
                <img src="Shopping-Add-Products-To-Cart-Or-Basket-01--Streamline-Bangalore 1.svg" alt="" />
            </div>
        </div>
    )
}