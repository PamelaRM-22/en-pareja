export class Admi{
    protected ci_adm:number = 0;
    protected id_admi:number = 0;
  
    constructor (ci_adm:number, id_admi:number) {
      this.ci_adm= ci_adm;
      this.id_admi= id_admi;
  }
  
  public get_ci_adm():number {return this.ci_adm;}
  public set_ci_adm(ci_adm:number) {this.ci_adm = ci_adm;}
  public get_id_admi():number {return this.id_admi;}
  public set_id_admi(id_admi:number) {this.id_admi = id_admi;}
  
  }