import { BooleanLiteral } from "typescript";

export class Gestor {
    isEnabled: boolean;
  // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
  constructor(id?: string, nome?: string, ativo?: boolean, usuarios?: string[], roles?: string[], projetos?:any[]) {

    this.id = id;
    this.nome = nome;
    this.ativo = ativo;
    this.projetos = projetos;
    this.usuarios = usuarios;
    this.roles= roles;
  }

  public id: string;
  public nome?: string;
  public ativo: boolean;
  public projetos: any[];
  public usuarios: string[];
  public roles: string[];

}
