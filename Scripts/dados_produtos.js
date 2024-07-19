const nome = {
    Cinta: "Cinta Redutora Massage Belt Cinta",
    Almofada: "Almofada Vibratória Térmica",
    Massageador: "Massageador Hand Black Physical"
};

const precos = {
    Cinta: "R$ 620,00 ou 10X de R$62,00",
    Colete: "R$ 1.199,00",
    Massageador: "R$ 620,00",
    produto4: "R$ 999,00",
    produto5: "R$ 1.299,00"
};

const links = {
    Cinta: "a",
};

function obterPreco(nomeProduto) {
    return precos[nomeProduto] || "Preço não disponível";
}

function obterNome(nomeProduto){
    return nome[nomeProduto] || "Nome não disponível";
}