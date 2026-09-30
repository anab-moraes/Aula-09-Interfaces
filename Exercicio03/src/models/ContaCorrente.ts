import { ContaCorrenteProps } from "../interfaces/ContaProps.js";
import { ContaBancaria } from "./ContaBancaria.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps>{

    constructor(protected props: ContaCorrenteProps){
        super(props);
    }

    public get getLimiteChequeEspecial(): number {return this.props.limiteChequeEspecial;}

    public set setLimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        if (novoLimiteChequeEspecial < 0) {
            console.log("\n ERRO: O limite do cheque especial da conta não pode ser negativo!");
            return;
        }
        this.props.limiteChequeEspecial = novoLimiteChequeEspecial;
    }
}