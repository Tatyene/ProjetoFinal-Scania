export class Vagas {

    constructor() {
        this.id = 0;
        this.idempresa = 0;
        this.idturno = 0;
        this.idmodalidade = 0;
        this.idescolaridade = 0;
        this.titulo_vaga = '';
        this.descricao = '';
        this.salario = 0;
        this.data_limite_inscricao = '';
        this.quantidade_vaga = 0;
    }
    public id: number;
    public idempresa: number;
    public idturno: number;
    public idmodalidade: number;
    public idescolaridade: number;
    public titulo_vaga: string;
    public descricao: string;
    public salario: number;
    public data_limite_inscricao: string;
    public quantidade_vaga: number;
}
