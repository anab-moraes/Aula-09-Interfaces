import { LampadaProps } from "../interfaces/DispositivoProps.js";
import { Dispositivo } from "./Dispositivo.js";

export class LampadaInteligente extends Dispositivo<LampadaProps>{

     constructor(protected props: LampadaProps){
        super(props);
    }

    public get getCorHexadecimal(): string {return this.props.corHexadecimal;}
    public get getNivelBrilho(): number {return this.props.nivelBrilho;}

    public set setCorHexadecimal(novoCorHexadecimal: string) {
        if (novoCorHexadecimal.trim().length === 0) {
            console.log("\n ERRO: A raça do cachorro não pode ser vazia!");
            return;
        }
        this.props.corHexadecimal = novoCorHexadecimal;
    }

    public set setNivelBrilho(novoNivelBrilho: number) {
         if (novoNivelBrilho === 0) {
            console.log("\n ERRO: A raça do cachorro não pode ser vazia!");
            return;
        }
        this.props.nivelBrilho = novoNivelBrilho;
    }
}