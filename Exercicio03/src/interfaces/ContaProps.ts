export interface ContaBancariaProps{
   numeroConta: string;
   titular: string;
   saldo: number;
}  

export interface ContaCorrenteProps extends ContaBancariaProps{
   limiteChequeEspecial: number;
}  

export interface ContaPoupancaProps extends ContaBancariaProps{
   rendimentoMensal: number;
}  