import { PedidoDetalleKey } from "./PedidoDetalleKey";

export interface PedidoDetalle{
    idPedidoDetalle: PedidoDetalleKey;
    cantidad: number;
    valorVenta: number;
    eliminado: boolean
}