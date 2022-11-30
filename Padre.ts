export class Admi{
  private apellid: string = "";
    private ci_padre:number =  0;
    private email:string = "";
    private nombre:string = "";
    private tel: string = "";
  
    constructor (apellid: string, ci_padre:number, email:string, nombre:string, tel: string) {
      this.apellid =apellid;
      this.ci_padre= ci_padre;
      this.email = email;
      this. nombre = nombre;
      this. tel = tel;
  }
  
  public get_apellid():string {return this.apellid;}
  public set_apellid(apellid:string) {this.apellid = apellid;}
  public get_ci_padre():number {return this.ci_padre;}
  public set_ci_padre(ci_padre:number) {this.ci_padre = ci_padre;}
  public get_email():string {return this.email;}
  public set_email(email:string) {this.email = email;}
  public get_nombre():string {return this.nombre;}
  public set_nombre(nombre:string) {this.nombre = nombre;}
  public get_tel():string {return this.tel;}
  public set_tel(tel:string) {this.tel = tel;}
  
  }