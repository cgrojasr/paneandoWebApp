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
    nombre: string,
    descripcion: string,
    tipo_producto: string,
    valor_venta: number,
    image_url: string,
    cantidad: number,
    valor_total: number,
    selected: boolean
}

export interface ProductoLocalStorage {
    id_producto: number,
    cantidad: number
}