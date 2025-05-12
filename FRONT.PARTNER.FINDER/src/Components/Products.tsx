import { Product } from "./Product";

export function Products() {
    return (
        <div className="h-[38vh] flex flex-col items-center justify-center gap-16">
            <div className="flex gap-10">
                <Product path="Money-Bag--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Ofertas" title="Ofertas" />
                <Product path="Taco-And-Beer--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Bebidas" title="Bebidas" />
                <Product path="Bowl-Of-Rice--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Comidas" title="Comidas" />
                <Product path="Happy-Vacuum-Cleaner--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Limpeza" title="Limpeza" />
                <Product path="Clothes-Cabinet--Streamline-Ux 1.png" alt="Imagem ilustrativa de itens de Vestuário" title="Vestuário" />
                <Product path="Analog-Watch-3--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Vestuário" title="Acessórios" />
                <Product path="Phone-Smiley--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Eletrônicos" title="Eletrônicos" />
                <Product path="Document-Sign-1--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Escritório" title="Escritório" />
                <Product path="Power-Drink--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Suprimentos" title="Suprimentos" />
                <Product path="Perfume-1--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Perfumaria" title="Perfumaria" />
                <Product path="Rolling-Brush--Streamline-Ux 1.svg" alt="Imagem ilustrativa de itens de Ferramentas" title="Ferramentas" />
            </div>
            <button className="text-2xl text-white bg-blue-300 py-2 px-4 rounded hover:bg-blue-700 transition-all ease-in-out">TODOS OS PARCEIROS</button>
        </div>
    )
}