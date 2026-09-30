import { AnimalProps } from "../interfaces/AnimalProps.js";

export class Animal<T extends AnimalProps = AnimalProps> {

    constructor(protected props: T) { }

    public get getNomePaciente(): string { return this.props.nomePaciente; }
    public get getNomeTutor(): string { return this.props.nomeTutor; }
    public get getPesoKg(): number { return this.props.pesoKg; }

    public set setNomePaciente(novoNomePaciente: string) {
        if (novoNomePaciente.trim().length === 0) {
            console.log("\n ERRO: O nome do paciente não pode ser vazio!");
            return;
        }
        this.props.nomePaciente = novoNomePaciente;
    }

    public set setNomeTutor(novoNomeTutor: string) {
        if (novoNomeTutor.trim().length === 0) {
            console.log("\n ERRO: O nome do tutor não pode ser vazio!");
            return;
        }
        this.props.nomeTutor = novoNomeTutor;
    }

    public set setPesoKg(novoPesoKg: number) {
        if (novoPesoKg < 0) {
            console.log("\n ERRO: O peso do animal não pode ser negativo!");
            return;
        }
        this.props.pesoKg = novoPesoKg;
    }

}