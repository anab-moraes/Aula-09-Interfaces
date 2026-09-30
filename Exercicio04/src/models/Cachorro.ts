import { CachorroProps } from "../interfaces/AnimalProps.js";
import { Animal } from "./Animal.js";

export class Cachorro extends Animal<CachorroProps>{

     constructor(protected props: CachorroProps){
        super(props);
    }

    public get getPorte(): string {return this.props.porte;}
    public get getPrecisaTosa(): boolean {return this.props.precisaTosa;}

    public set setPorte(novoPorte: string) {
        if (novoPorte.trim().length === 0) {
            console.log("\n ERRO: A raça do cachorro não pode ser vazia!");
            return;
        }
        this.props.porte = novoPorte;
    }

    public set setPrecisaTosa(novoPrecisaTosa: string) {
          if (novoPrecisaTosa.toLowerCase() === "sim") {
            this.props.precisaTosa = true;
        }
        else if (novoPrecisaTosa.toLowerCase().replace("ã", "a") === "nao"){
             this.props.precisaTosa = false;
            }

        else{
            console.log("\n ERRO: Responda apenas sim ou não!");
            return;
        }
    }

}