export class  Satellite {
    name:string;
    type:string;
    launchDate: string;
    operational: boolean;
    orbitType:string;
    operationsal: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;

    }

    shouldShowWarning():boolean{
         return this.type == 'Space Debris'
          }                
         
        


    
}
