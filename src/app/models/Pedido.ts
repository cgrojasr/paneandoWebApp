import { PedidoDetalle } from "./PedidoDetalle";

export interface Pedido {
    idPedido: number;
    fecha: Date;
    direccion: string;
    fechaInicio: Date;
    fechaFin: Date;
    email: string;
    estado: boolean;
    lstPedidoDetalle: PedidoDetalle;
}