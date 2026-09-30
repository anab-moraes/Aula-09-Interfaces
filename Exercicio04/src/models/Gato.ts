import { GatoProps } from "../interfaces/AnimalProps.js";
import { Animal } from "./Animal.js";

export class Gato extends Animal<GatoProps>{

     constructor(protected props: GatoProps){
        super(props);
    }

    public get getFivFelvTestado(): boolean {return this.props.fivFelvTestado;}
    public get getIsIndoor(): boolean {return this.props.isIndoor;}

    public set setFivFelvTestado(novoFivFelvTestado: string) {
        if (novoFivFelvTestado.toLowerCase() === "sim") {
            this.props.fivFelvTestado = true;
        }
        else if (novoFivFelvTestado.toLowerCase().replace("ã", "a") === "nao"){
             this.props.fivFelvTestado = false;
            }

        else{
            console.log("\n ERRO: Responda apenas true ou false!");
            return;
        }
    }

    public set setIsIndoor(novoIsIndoor: string) {
         if (novoIsIndoor.toLowerCase() === "sim") {
            this.props.isIndoor = true;
        }
        else if (novoIsIndoor.toLowerCase().replace("ã", "a") === "nao"){
             this.props.isIndoor = false;
            }
        else{
            console.log("\n ERRO: Responda apenas true ou false!");
            return;
        }
    }

}