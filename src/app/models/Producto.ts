import { ProductoPrecio } from "./ProductoPrecio";
import { TipoProducto } from "./TipoProducto";


export interface Producto {
    idProducto: number,
    nombre: string;
    descripcion: string;
    imageURL: string;
    objTipoProducto: TipoProducto;
    activo: boolean;
    lstProductoPrecio: ProductoPrecio[]
}

export interface ProductoCatalogo{
    id_producto: number,
    nombre: String,
    descripcion: String,
    tipo_producto: String,
    valor_venta: Number,
    image_url: String,
    cantidad?: number,
    selected: boolean
}

export interface ProductoLocalStorage {
    id_producto: number,
    cantidad: number
}