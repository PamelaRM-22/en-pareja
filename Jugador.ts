 export class Jugador{
    private apellidos: string= "";
    private categoria: string= "";
    private ci: number = 0;; 
    private direccion: string= "";
    private email: string= "";
    private fecha_nac: number= 0;
    private id: string= "";
    private nombre:string= "";
    private pierna_habil: string= "";
    private posicion:string="";
    private telefono: number= 0;
  
    constructor (apellidos:string, categoria: string, direccion: string, email: string, fecha_nac:number,
        id: string, nombre:string, pierna_habil:string, posicion:string, telefono: number, ci: number) {
      this.apellidos = apellidos;
      this.categoria = categoria;
      this.ci = ci;
      this.direccion = direccion;
      this.email = email;
      this.fecha_nac = fecha_nac;
      this.id = id;
      this.nombre= nombre;
      this.pierna_habil= pierna_habil;
      this.posicion = posicion;
      this.telefono = telefono;
  }
  public get_apellidos():string {return this.apellidos;}
  public set_apellidos(apellidos:string) {this.apellidos = apellidos;}
  public get_categoria():string {return this.categoria;}
  public set_categoria(categoria:string) {this.categoria = categoria;}
  public get_ci():number {return this.ci;}
  public set_ci(ci:number) {this.ci = ci;}
  public get_direccion():string {return this.direccion;}
  public set_direccion(direccion:string) {this.direccion = direccion;}
  public get_email():string {return this.email;}
  public set_email(email:string) {this.email = email;}
  public get_fecha_nac():number {return this.fecha_nac;}  
  public set_fecha_nac(fecha_nac:number) {this.fecha_nac = fecha_nac;}
  public get_id():string {return this.id;}
  public set_id(id:string) {this.id = id;}
  public get_nombre():string {return this.nombre;}
  public set_nombre(nombre:string) {this.nombre = nombre;}
  public get_pierna_habil():string {return this.pierna_habil;}
  public set_pierna_habil(pierna_habil:string) {this.pierna_habil = pierna_habil;}
  public get_posicion():string {return this.posicion;}
  public set_posicion(posicion:string) {this.posicion = posicion;}
  public get_telefono():number {return this.telefono;}
  public set_telefono(telefono:number) {this.telefono = telefono;}

 
  public Jugador(nombre:Jugador,apellidos:Jugador,posicion:Jugador):void {
    let registro = {
   //     apellidos: Jugador.apellidos(),
     //   nombre: Jugador.get_nombre(),
       // posicion : Jugador.get_posicion();
    }
  }
  }