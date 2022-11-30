export class Empleado{
    private Apellidos:string= "";
    private ci_empl:number = 0;
    private contraseña:string="";
    private direccion:string= "";
    private email:string="";
    private nombre:string="";
    private nom_usuario:string="";
    private rol: string="";
    private telefono : number = 0;
    private Administrador: any [] = [];
    private Entrenador: any[] = [];
  
    constructor (Apellidos:string, ci_empl:number, contraseña:string, direccion:string,email: string, nombre: string,
        nom_usuario:string, telefono:number, rol: string) {
      this.Apellidos= Apellidos;
      this.ci_empl= ci_empl;
      this.contraseña= contraseña;
      this.direccion = direccion;
      this.email = email;
      this.nombre = nombre;
      this.nom_usuario = nom_usuario;
      this.rol = rol;
      this.telefono = telefono;
  }
  
  public get_Apellidos():string {return this.Apellidos;}
  public set_Apellidos(Apellidos:string) {this.Apellidos = Apellidos;}
  public get_ci_empl():number {return this.ci_empl;}
  public set_ci_empl(ci_empl:number) {this.ci_empl = ci_empl;}
  public get_contraseña():string {return this.contraseña;}
  public set_contraseña(contraseña:string) { this.contraseña = contraseña;}
  public get_direccion():string {return this.direccion;}
  public set_direccion(direccion:string) {this.direccion = direccion;}
  public get_email():string {return this.email;}
  public set_email(email:string) {this.email = email;}
  public get_nombre():string {return this.nombre;}
  public set_nombre(nombre:string) {this.nombre = nombre;}
  public get_nom_usuario():string {return this.nom_usuario;}
  public set_nom_usuario(nom_usuario:string) { this.nom_usuario= nom_usuario;}
  public get_rol():string {return this.rol;}
  public set_rol(rol:string) { this.rol= rol;}
  public get_telefono():number {return this.telefono;}
  public set_telefono(telefono:number) { this.telefono= telefono;}
  
  }