export interface DispositivoProps {
    idRede: string;
    nomeLocal: string;
    isLigado: boolean;
}

export interface LampadaProps extends DispositivoProps{
    corHexadecimal: string;
    nivelBrilho: number;

}

export interface TermostatoProps extends DispositivoProps{
    temperaturaAtual: number;
    temperaturaAlvo: number;
}