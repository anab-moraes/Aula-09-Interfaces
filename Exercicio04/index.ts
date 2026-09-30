import { Cachorro } from "./src/models/Cachorro.js";
import { Gato } from "./src/models/Gato.js";
import readline from "readline-sync";

const ObjGato = new Gato({
    nomePaciente: "cat",
    nomeTutor: "adolfo",
    pesoKg: 2000,
    fivFelvTestado: false,
    isIndoor: false
})

const ObjCachorro = new Cachorro({
    nomePaciente: "cat",
    nomeTutor: "adolfo",
    pesoKg: 2000,
    porte: "médio",
    precisaTosa: true
})

console.log("\n---- CADASTRO DE PACIENTE ----\n");
let escolha = readline.question("Seu pet é um cachorro ou um gato? ");

escolha = escolha.toLowerCase();

if (escolha == "gato") {

    ObjGato.setNomePaciente = readline.question("Qual o nome do gato? ");
    ObjGato.setNomeTutor = readline.question("Qual o nome do tutor? ");
    ObjGato.setPesoKg = readline.questionFloat("Qual o peso em kg do animal? ");
    ObjGato.setFivFelvTestado = readline.question("Possui o FIV/FELV? (sim/não) ");
    ObjGato.setIsIndoor = readline.question("Ele fica dentro de casa? (sim/não) ");



    console.log("\n---- DADOS DO GATO ----\n");

    console.log(`Nome do paciente:                  ${ObjGato.getNomePaciente}`);
    console.log(`NomeTutor:                         ${ObjGato.getNomeTutor}`);
    console.log(`Peso Kg:                           ${ObjGato.getPesoKg}`);
    console.log(`FIV FELV:                          ${ObjGato.getFivFelvTestado}`);
    console.log(`Is indoor:                         ${ObjGato.getIsIndoor}`);



} else if (escolha == "cachorro") {
    ObjCachorro.setNomePaciente = readline.question("Qual o nome do cachorro? ");
    ObjCachorro.setNomeTutor = readline.question("Qual o nome do tutor? ");
    ObjCachorro.setPesoKg = readline.questionFloat("Qual o peso em kg do animal? ");
    ObjCachorro.setPorte = readline.question("Qual o porte do cachorro? ");
    ObjCachorro.setPrecisaTosa = readline.question("Precisa tosar? ");

    console.log("\n---- DADOS DA CONTA CORRENTE ----\n");

    console.log(`Nome do Paciente:                  ${ObjCachorro.getNomePaciente}`);
    console.log(`Nome Tutor:                        ${ObjCachorro.getNomeTutor}`);
    console.log(`Peso Kg:                           ${ObjCachorro.getPesoKg}`);
    console.log(`Porte:                             ${ObjCachorro.getPorte}`);
    console.log(`Precisa de tosa:                   ${ObjCachorro.getPrecisaTosa}`);


} else {
    console.log("Resposta inválida, tente novamente");
}






