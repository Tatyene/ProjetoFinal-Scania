namespace ProjetoScania2.ViewModels
{
    public class ResumoVagaVM
    {
        public int id { get; set; }
        public string? nomeempresa { get; set; }
        public string? titulo_vaga { get; set; }
        public double salario { get; set; }
        public string? cidade { get; set; }
        public string? uf { get; set; }
        public string? data_limite_inscricao { get; set; }
    }
}
