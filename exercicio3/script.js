const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
function caixaAlta (array){
    const arrayCaixaAlta = {}
    for (let propriedade in array){
        arrayCaixaAlta[propriedade] = array[propriedade].toUpperCase()
    }
    return arrayCaixaAlta
}
const informaçoesCaixaAlta = caixaAlta(infosPessoa)
console.log(informaçoesCaixaAlta)

function corrido(array) {
    let texto = " ";
    for (let propriedade in array) {
        texto += `O valor da propriedade ${propriedade} é ${array[propriedade]}. `;
    }
    return texto;
}
const informaçoesTexto = corrido(infosPessoa)
console.log (informaçoesTexto)

function chamarCallBack (objeto, callback){
    const resultado = callback(objeto)
    console.log(resultado)
}
chamarCallBack(infosPessoa, caixaAlta)
chamarCallBack(infosPessoa, corrido)