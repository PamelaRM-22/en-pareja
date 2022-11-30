export class Equipo{
    private categoria: string = "";

    constructor(categoria:string){
        this.categoria = categoria;
    }
    public get_categoria():string{return this.categoria;}
    public set_categoria(categoria:string){this.categoria= categoria;}
    
}