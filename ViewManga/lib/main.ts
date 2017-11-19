import http = require('http');

class main {
    appPath: string; //Default values to locate 
    maincss: string;
    constructor(public valuate: string, public parsed: string) {
        this.appPath = valuate;
        this.maincss = parsed;
    }
   
}
interface serverFiles {
    serverCSS: Array<CSS>;
    serverHTML: string;
}
let serverData: Array<CSS>;