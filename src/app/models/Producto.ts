import { TipoProducto } from "./TipoProducto";


export interface Producto {
    idProducto: number,
    nombre: string;
    descripcion: string;
    imageURL: string;
    objTipoProducto: TipoProducto;
    activo: boolean;
}