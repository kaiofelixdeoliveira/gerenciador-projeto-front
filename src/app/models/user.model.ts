import { Gestor } from './gestor.model';

export class User {
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(id?: number, nome?: string, email?: string, senha?: string, perfil?: string) {

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.perfil = perfil;

    }

    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public perfil: string;

}