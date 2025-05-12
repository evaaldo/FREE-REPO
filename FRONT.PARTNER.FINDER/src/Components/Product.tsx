import { ProductModel } from "../Models/ProductModel";

export function Product(props: ProductModel) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src={props.path} alt={props.alt} className="bg-gray-100 hover:bg-gray-200 transition-all ease-in-out rounded p-1" />
            <p>{props.title}</p>
        </div>
    );
}