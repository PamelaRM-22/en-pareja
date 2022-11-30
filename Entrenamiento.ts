export class Entrenamiento{
    private estado: string = "";
    private fecha: string= "";
    private id_falta:number = 0;
    private id_jugador: number = 0;
    private motivo: string="";
  
    constructor (estado:string, fecha:string, id_falta:number,id_jugador:number,motivo:string) {
      this.estado= estado;
      this.fecha= fecha;
      this.id_falta= id_falta;
      this.id_jugador= id_jugador;
      this.motivo=motivo;
  }
  
  public get_estado():string {return this.estado;}
  public set_estado(estado:string) {this.estado = estado;}
  public get_fecha():string {return this.fecha;}
  public set_fecha(fecha:string) {this.fecha = fecha;}
  public get_id_falta():number {return this.id_falta;}
  public set_id_falta(id_falta:number) { this.id_falta = id_falta;}
  public get_id_jugador():number {return this.id_jugador;}
  public set_id_jugador(id_jugador:number) { this.id_jugador = id_jugador;}
  public get_motivo():string {return this.motivo;}
  public set_motivo(motivo:string) { this.motivo = motivo;}
  
  }