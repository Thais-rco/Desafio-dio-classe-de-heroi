class heroCharacters {
	constructor (name, age, kind){
    	this.name = name
        this.age = age
        this.kind = kind
        }
        
        atack () {
        let atack = " "
        switch(this.kind) {
        case "mago":
        	atack = "magia";
            break
            
        case "guerreiro":
        	atack = "espada";
            break
            
        case "monge":
        	atack = "artes marciais";
           	break
            
        case "ninja":    
        	atack = "shuriken";
            break 
            
           default:
           	console.log ("Classe invalida");
            break
             }
        
        console.log ( "O " + this.kind + " atacou usando " + atack)
       
        
        }
}

let ninja = new heroCharacters("Thais", 33, "ninja")
ninja.atack()
let monge = new heroCharacters( "Eduarda", 10, "monge")
monge.atack()
let guerreiro = new heroCharacters ("Thomas", 27, "guerreiro")
guerreiro.atack()
let mago = new heroCharacters ("Hugo", 38, "mago")
mago.atack()