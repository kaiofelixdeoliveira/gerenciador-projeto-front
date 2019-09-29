export class Recurso {

    constructor(id?: number, nome?: string, ativo?: boolean, roles?: string[]) {
  
      this.id = id;
      this.nome = nome;
      this.ativo = ativo;
      this.roles = roles;
    
    }
  
    public id: number;
    public nome: string;
    public ativo: boolean;
    public roles: string[];
    public isEnabled: boolean;
    
  }
  