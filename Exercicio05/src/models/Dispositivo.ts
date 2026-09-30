import { DispositivoProps } from "../interfaces/DispositivoProps.js";
1

export class Dispositivo<T extends DispositivoProps = DispositivoProps> {

    constructor(protected props: T) { }

    public get getIdRede(): string { return this.props.idRede; }
    public get getNomeLocal(): string { return this.props.nomeLocal; }
    public get getIsLigado(): boolean { return this.props.isLigado; }

    public set setIdRede(novoIdRede: string) {
        if (novoIdRede.trim().length === 0) {
            console.log("\n ERRO: O nome do paciente não pode ser vazio!");
            return;
        }
        this.props.idRede = novoIdRede;
    }

    public set setNomeLocal(novoNomeLocal: string) {
        if (novoNomeLocal.trim().length === 0) {
            console.log("\n ERRO: O nome do tutor não pode ser vazio!");
            return;
        }
        this.props.nomeLocal = novoNomeLocal;
    }

    public set setIsLigado(novoIsLigado: string) {
        if (novoIsLigado.toLowerCase() === "sim") {
            this.props.isLigado = true;
            
        } else if (novoIsLigado.toLowerCase().replace("ã", "a") === "nao"){
        this.props.isLigado = false;

        } else {
            console.log("\n ERRO: Não pode ser vazio!");
            return;
        }

    }

}