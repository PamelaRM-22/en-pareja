export class Entrenador{
    private categoria: string = "";
    private ci_en: number = 0;
    private id_entrenador:number = 0;;
  
    constructor (categoria:string, ci_en:number, id_entrenador:number) {
      this.categoria= categoria;
      this.ci_en= ci_en;
      this.id_entrenador= id_entrenador;;
  }
  
  public get_categoria():string {return this.categoria;}
  public set_categoria(categoria:string) {this.categoria = categoria;}
  public get_ci():number {return this.ci_en;}
  public set_ci(ci_en:number) {this.ci_en = ci_en;}
  public get_id_entrenador():number {return this.id_entrenador;}
  public set_id_entrenador(id_entrenador:number) { this.id_entrenador = id_entrenador;}
  
  }