import { Recurso } from "./recurso.model";

export class Projeto {


  constructor(id?: number, codigo?: string, proposta?: string, descricao?: string,
    quantidadeHoras?: number, dataContratacao?: Date, observacao?: string, projectManager?: any,
    projetoRecursos?: any[], faturamento?: any, gestor?: any, recurso?:any) {

    this.id = id;
    this.codigo = codigo;
    this.proposta = proposta;
    this.descricao = descricao;
    this.quantidadeHoras = quantidadeHoras;
    this.dataContratacao = dataContratacao;
    this.observacao = observacao;
    this.projectManager = projectManager;
    this.projetoRecursos = projetoRecursos;
    this.faturamento = faturamento;
    this.gestor = gestor;
    this.recurso = recurso;
  }

  public id: number;
  public codigo: string;
  public proposta: string;
  public descricao: string
  public quantidadeHoras: number;
  public dataContratacao: Date;
  public observacao: string;
  public projectManager: any;
  public projetoRecursos?: Recurso[];
  public faturamento: any;
  public gestor?: any;
  public recurso?: any;

}
