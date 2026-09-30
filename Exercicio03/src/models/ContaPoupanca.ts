import { ContaPoupancaProps } from "../interfaces/ContaProps.js";
import { ContaBancaria } from "./ContaBancaria.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps>{

    constructor(protected props: ContaPoupancaProps){
        super(props);
    }

    public get getRendimentoMensal(): number {return this.props.rendimentoMensal;}

    public set setRendimentoMensal(novoRendimentoMensal: number) {
        if (novoRendimentoMensal < 0) {
            console.log("\n ERRO: O rendimento mensal da conta não pode ser negativo!");
            return;
        }
        this.props.rendimentoMensal = novoRendimentoMensal;
    }
}