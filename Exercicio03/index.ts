import { ContaBancaria } from "./src/models/ContaBancaria.js";
import { ContaBancariaProps } from "./src/interfaces/ContaProps.js";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
import readline from "readline-sync";


const ObjContaC = new ContaCorrente({
    numeroConta: "ala",
    titular: "ata",
    saldo: 6,
    limiteChequeEspecial: 2
});

const ObjContaP = new ContaPoupanca({
    numeroConta: "ala",
    titular: "ata",
    saldo: 6,
    rendimentoMensal: 2
});
console.log("\n---- CADASTRO DE CONTA BANCÁRIA ----\n");
let escolha = readline.question("Sua conta é Poupança ou Corrente?\n");

escolha = escolha.toLowerCase().replace("ç", "c");

if (escolha == "poupanca") {

    ObjContaP.setNumeroConta = readline.question("Qual o número da conta poupança?");
    ObjContaP.setTitular = readline.question("Qual o titular da conta poupança?");
    ObjContaP.setSaldo = readline.questionFloat("Qual o saldo da conta poupança?");
    ObjContaP.setRendimentoMensal = readline.questionFloat("Qual o rendimento mensal da conta poupança?");

    console.log("\n---- DADOS DA CONTA POUPANÇA ----\n");

    console.log(`Número da conta:                  ${ObjContaP.getNumeroConta}`);
    console.log(`Titular:                          ${ObjContaP.getTitular}`);
    console.log(`Saldo:                            ${ObjContaP.getSaldo}`);
    console.log(`Rendimento mensal:                ${ObjContaP.getRendimentoMensal}`);


} else if (escolha == "corrente") {
    ObjContaC.setNumeroConta = readline.question("Qual o número da conta corrente?");
    ObjContaC.setTitular = readline.question("Qual o titular da conta corrente?");
    ObjContaC.setSaldo = readline.questionFloat("Qual o saldo da conta corrente?");
    ObjContaC.setLimiteChequeEspecial = readline.questionFloat("Qual o limite do cheque especial da conta corrente?");

    console.log("\n---- DADOS DA CONTA CORRENTE ----\n");

    console.log(`Número da conta:                  ${ObjContaC.getNumeroConta}`);
    console.log(`Titular:                          ${ObjContaC.getTitular}`);
    console.log(`Saldo:                            ${ObjContaC.getSaldo}`);
    console.log(`Rendimento mensal:                ${ObjContaC.getLimiteChequeEspecial}`);


} else {
    console.log("Resposta inválida, tente novamente")
}



