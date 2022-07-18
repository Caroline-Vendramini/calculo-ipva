function calculaIpva({tipoVeiculo, anoDeFabricacao, categoria, valorAtual, topico}){

    let tempo = 0
    let porcentagem = 0

    if (tipoVeiculo === "moto") {
        console.log("moto");

        switch (categoria){
            case "a":
                tempo = 10
                break
            case "b":
                tempo = 15
                break
            case "c":
                tempo = 18
                break
            case "d":
                tempo = 20
                break
            case "e":
                tempo = 30   
                break
            default: 
                tempo = 0     
        }

        let idade = subtrairAnos(anoDeFabricacao);
        if (idade > tempo) {
            console.log("Não paga IPVA")
            return  
        } else {
            switch (topico) {
                case "a":
                    porcentagem = 0.01
                    break;
                case "b":
                    porcentagem = 0.015
                    break;
                case "c":
                    porcentagem = 0.02
                    break;
                case "d":
                    porcentagem = 0.025
                    break;
                case "e":
                    porcentagem = 0.0275
                    break;
                case "f":
                    porcentagem = 0.03
                    break;
                case "g":
                    porcentagem = 0.035
                    break;
                default: porcentagem = 0
            }
            let ipva = valorAtual * porcentagem
            
            return ipva
        }
        
    } else {
        console.log("carro");
        
        switch (categoria){
            case "a":
                tempo = 10
                break
            case "b":
                tempo = 15
                break
            case "c":
                tempo = 18
                break
            case "d":
                tempo = 20
                break
            case "e":
                tempo = 30   
                break
            default: 
                tempo = 0     
        }

        let idade = subtrairAnos(anoDeFabricacao);
        if (idade > tempo) {
            console.log("Não paga IPVA")
            return  
        } else {
            switch (topico) {
                case "a":
                    porcentagem = 0.02
                    break;
                case "b":
                    porcentagem = 0.025
                    break;
                case "c":
                    porcentagem = 0.03
                    break;
                case "d":
                    porcentagem = 0.035
                    break;
                case "e":
                    porcentagem = 0.0375
                    break;
                case "f":
                    porcentagem = 0.04
                    break;
                default: porcentagem = 0
            }
            let ipva = valorAtual * porcentagem
            
            return ipva
        }
        
    }
}

function subtrairAnos(ano){
    return new Date().getFullYear() - ano    
}

function formataValor(valor){
    return `R$ ${valor}`
}

let valorIpva = calculaIpva({tipoVeiculo:"moto", anoDeFabricacao:2011, categoria:"d", valorAtual:7329.77, topico:"g"})
let valorIpvaFormatado = formataValor(valorIpva.toFixed(2))
console.log(valorIpvaFormatado)