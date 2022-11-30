export class EstdJugPart{
    private convocado:string= "";
    private goles:number = 0;
    private id_jug:number = 0;
    private min_jugados:number = 0;
    private suplente:string="";
    private tarjetas_amar:number = 0;
    private tarjetas_roj:number = 0;
    private titular: string="";

    constructor(convocado:string, goles:number, id_jug:number, min_jugados:number, suplente:string, tarjetas_amar:number, 
        tarjetas_roj:number, titular:string){
            this.goles = goles;
            this.id_jug = id_jug;
            this.min_jugados = min_jugados;
            this.suplente = suplente;
            this.tarjetas_amar = tarjetas_amar;
            this.tarjetas_roj = tarjetas_roj;
            this.titular = titular;
            this.convocado = convocado;
    }
    public get_convocado():string {return this.convocado;}
    public set_convocado(convocado: string) {this.convocado = convocado;}
    public get_goles():number {return this.goles;}
    public set_goles(goles:number) {this.goles = this.goles;}
    public get_id_jug():number {return this.id_jug;}
    public set_id_jug(id_jug:number) {this.id_jug = id_jug;}
    public get_min_jugados():number {return this.min_jugados;}
    public set_min_jugados(min_jugados:number) {this.min_jugados = min_jugados;}
    public get_suplente():string {return this.suplente;}
    public set_suplente(suplente:string){this.suplente;}
    public get_tarjetas_amar():number {return this.tarjetas_amar;}
    public set_tarjetas_amar(tarjetas_amar:number) {this.tarjetas_amar;}
    public get_tajetas_roj():number {return this.tarjetas_roj;}
    public set_tarjetas_roj(tarjetas_roj:number) {this.tarjetas_roj = tarjetas_roj;}
    public get_titular():string {return this.titular;}
    public set_titular (titular:string) {this.titular = titular;}
}
