export interface ClienteAutenticar{
    email: String,
    password: String
}

export interface ClienteLogin{
    id_cliente: Number,
    nombres: String,
    apellidos: String,
    email: String,
    sesion: Boolean
}