function calcularbanco(){

    let saldo = Number(prompt("Digite o saldo Inicial")) 
    let deposito = Number(prompt("Digite o valor do depósito"))
    let saque = Number(prompt("Digite o valor do saque"))
    let taxa = Number(prompt("Digite o valor do juros"))
    let anos = Number(prompt("Digite os anos do investimento"))

    // SALDO TOTAL DA CONTA
    saldo = saldo + deposito 

    // saque
    saldo = saldo - saque

    // rendimento
    let rendimento = saldo * (taxa / 100)

    // metade do saldo
    let metadeSaldo = saldo / 2 

    // verifica se é par
    let saldo_par = saldo % 2 == 0

    // juros compostos
    let jurosCompostos = saldo * (1 + taxa / 100) ** anos

    document.getElementById("resultado").innerHTML = `
    
    <strong>Saldo total</strong>
    R$ ${saldo.toFixed(2)} <br>
    
    <strong>Rendimento</strong>
    R$ ${rendimento.toFixed(2)} <br>
    
    <strong>Meta de saldo</strong>
    R$ ${metadeSaldo.toFixed(2)} <br>    
    
    <strong>Saldo é:</strong>
    ${saldo_par ? 'Número par' : 'Número ímpar'} <br>

    <strong>Juros Compostos</strong>
    R$ ${jurosCompostos.toFixed(2)} <br>
    `
}

function limparCaixa(){
    document.getElementById("resultado").innerHTML = ""
}