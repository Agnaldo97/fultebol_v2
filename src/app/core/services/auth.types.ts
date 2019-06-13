// Tipagem
export interface User {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    sexo?: string;
    dataNascimento?: string;
    dataCadastro?: string;
    endereco?: string;
    cep?: string;
    uf?: string;
    bairro?: string;
    cidade?: string;
    logradouro: string;
}