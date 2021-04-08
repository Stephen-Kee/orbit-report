export class Satellite {
    
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name 
    this.type = type
    this.launchDate = launchDate 
    this.orbitType = orbitType
    this.operational = operational
    }
    shouldShowWarning() {
        let warning: boolean = false
        console.log(this.type.toLowerCase)
            console.log(this.name)
        if (this.type.toLowerCase() === "space debris") {
            warning = true
            return warning
        } else {
          warning = false
          return warning
        } 
    }
}
