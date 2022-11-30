export class Partido{
    private campo_de_juego: string = "";
    private categoria: string = "";
    private fecha: number = 0;
    private goles_a_favor: number = 0;
    private goles_en_contra: number = 0;
    private id_partido: number = 0;
    private jornada: string = "";
    private local_o_visitante: string = "";
    private partidos_ganados: number = 0;
    private partidos_empatados: number = 0;
    private partidos_perdidos: number = 0;
    private rival: string = "";
    private tarjetas_amar: number = 0;
    private tarjetas_roj: number = 0;


    constructor(campo_de_juego: string, categoria:string, fecha: number, goles_a_favor: number, goles_en_contra: number, 
        id_partido: number, jornada:string, local_o_visitante: string, partidos_ganados: number, partidos_empatados: number, 
    partidos_perdidos: number, rival: string, tarjetas_amar: number, tarjetas_roj: number){
        this.campo_de_juego = campo_de_juego;
        this.categoria = this.categoria;
        this.fecha = fecha;
        this.goles_a_favor = goles_a_favor;
        this.goles_en_contra = goles_en_contra;
        this.id_partido = id_partido;
        this.jornada = jornada;
        this.local_o_visitante = local_o_visitante;
        this.partidos_ganados = partidos_ganados;
        this.partidos_empatados = partidos_empatados;
        this.partidos_perdidos = partidos_perdidos;
        this.rival = rival;
        this.tarjetas_amar = tarjetas_amar;
        this.tarjetas_roj = tarjetas_roj;
    }
    public get_campo_de_juego(): string {return this.campo_de_juego;}
    public set_campo_de_juego(campo_de_juego: string){this.campo_de_juego = campo_de_juego;}
    public get_categoria():string{return this.categoria;}
    public set_categoria(categoria:string){this.categoria= categoria;}
    public get_fecha(): number {return this.fecha;}
    public set_fecha(fecha: number){this.fecha = fecha;}
    public get_goles_a_favor(): number {return this.goles_a_favor;}
    public set_goles_a_favor(goles_a_favor: number){this.goles_a_favor = goles_a_favor;}
    public get_goles_en_contra(): number {return this.goles_en_contra;}
    public set_goles_en_contra(goles_en_contra: number){this.goles_en_contra = goles_en_contra;}
    public get_id_partido(): number {return this.id_partido;}
    public set_id_partido(id_partido: number){this.id_partido = id_partido;}
    public get_jornada(): string {return this.jornada;}
    public set_jornada(jornada: string){this.jornada = jornada;}
    public get_local_o_visitante(): string {return this.local_o_visitante;}
    public set_local_o_visitante(local_o_visitante: string){this.local_o_visitante = local_o_visitante;}
    public get_partidos_ganados(): number {return this.partidos_ganados;}
    public set_partidos_ganados(partidos_ganados: number){this.partidos_ganados = partidos_ganados;}
    public get_partidos_empatados(): number {return this.partidos_empatados;}
    public set_partidos_empatados(partidos_empatados: number){this.partidos_empatados = partidos_empatados;}
    public get_partidos_perdidos(): number {return this.partidos_perdidos;}
    public set_partidos_perdidos(partidos_perdidos: number){this.partidos_perdidos = partidos_perdidos;}  
    public get_rival():string{return this.rival;}
    public set_rival(rival: string){this.rival = rival;}
    public get_tarjetas_amar():number {return this.tarjetas_amar;}
    public set_tarjetas_amar(tarjetas_amar: number){this.tarjetas_amar = tarjetas_amar;}
    public get_tarjetas_roj(): number {return this.tarjetas_roj;}
    public set_tarjetas_roj(tarjetas_roj: number){this.tarjetas_roj = tarjetas_roj;}
}