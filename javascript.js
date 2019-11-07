class Animal {
    typ=null;
     constructor(typ, zvuk){ 
        this.typ = typ;
        this.zvuk = zvuk;
}
speak(){
    alert(this.typ + "makes zvuk" + this.zvuk)
}

}
const pes = new Animal("pes", "štekat");
const macka = new Animal ("mačka"," mnaukat ");

pes.speak();
macka.speak()

class pes extends Animal {
    typpsa =null;
    constructor(typpsa){
        super("pes","haf");
        this.typpsa=typpsa;
    }
speak(){
    alert(this.typ+""+ this.typpsa+"robi zvuk"+ this.zvuk);
}
}
const bigl = new pes ("bigl");
bigl.speak();

