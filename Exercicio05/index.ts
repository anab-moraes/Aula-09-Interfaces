
import readline from "readline-sync";
import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";

const ObjLampada = new LampadaInteligente({
    idRede: "string",
    nomeLocal: "string",
    isLigado: true,
    corHexadecimal: "string",
    nivelBrilho: 0
})

const ObjTermostato = new Termostato({
    idRede: "string",
    nomeLocal: "string",
    isLigado: true,
    temperaturaAtual: 0,
    temperaturaAlvo: 0
})

console.log("\n---- CADASTRO DE DISPOSITIVO ----\n");
let escolha = readline.question("Seu dispositivo é um termostato ou uma lâmpada inteligente?? ");

escolha = escolha.toLowerCase().replace("â", "a");

if (escolha == "lampada"|| escolha== "lampada inteligente") {

    ObjLampada.setIdRede = readline.question("Qual o ID da rede da lâmpada? ");
    ObjLampada.setNomeLocal = readline.question("Qual o nome do local? ");
    ObjLampada.setIsLigado = readline.question("Está Ligado? (sim/não) ");
    ObjLampada.setCorHexadecimal = readline.question("Qual a cor em hexadecimal? ");
    ObjLampada.setNivelBrilho = readline.questionInt("Qual o nível de brilho? ");



    console.log("\n---- DADOS DA LÂMPADA ----\n");

    console.log(`ID rede:                         ${ObjLampada.getIdRede}`);
    console.log(`Nome Local:                      ${ObjLampada.getNomeLocal}`);
    console.log(`Ligado:                          ${ObjLampada.getIsLigado}`);
    console.log(`Cor Hexadecimal:                 ${ObjLampada.getCorHexadecimal}`);
    console.log(`Nível Brilho:                    ${ObjLampada.getNivelBrilho}`);



} else if (escolha == "termostato") {
    ObjTermostato.setIdRede = readline.question("Qual o ID da rede do termostato? ");
    ObjTermostato.setNomeLocal = readline.question("Qual o nome do local? ");
    ObjTermostato.setIsLigado = readline.question("Está ligado? ");
    ObjTermostato.setTemperaturaAtual = readline.questionInt("Qual a temperatura atual? ");
    ObjTermostato.setTemperaturaAlvo = readline.questionInt("Qual a temperatura alvo? ");

    console.log("\n---- DADOS DO TERMOSTATO ----\n");

    console.log(`ID rede:                           ${ObjTermostato.getIdRede}`);
    console.log(`Nome Local:                        ${ObjTermostato.getNomeLocal}`);
    console.log(`Ligado:                            ${ObjTermostato.getIsLigado}`);
    console.log(`Temperatura Atual:                 ${ObjTermostato.getTemperaturaAtual}`);
    console.log(`Temperatura Alvo:                  ${ObjTermostato.getTemperaturaAlvo}`);


} else {
    console.log("Resposta inválida, tente novamente");
}






