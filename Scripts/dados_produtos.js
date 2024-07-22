const nome = {
    Cinta: "Cinta Redutora Massage Belt",
    Corporal_Amarelo: "Corporal De Massagem Amarelo",
    Corporal_Prata: "Corporal De Massagem Prata",
    Plataforma: "Plataforma Vibratória Body Simmer Physical",
    Almofada: "Almofada Vibratória Térmica",
    Massageador_Black: "Massageador Hand Black Physical",
    Colchao_Max: "Physic MAX rabatan associado às pastilhas de infravermelho longo e pastilhas magnéticas",
    Esteira_Cromo: "Esteira Cromo Plus",
    Esteira_Rest: "Esteira Physical Rest",
    Foot_Massage: "Foot Massage II",

};

const precos = {
    Cinta: "R$ 620,00 ou 10X de R$62,00",
    Corporal_Amarelo: "Preço Sob Consulta",
    Corporal_Prata: "Preço Sob Consulta",
    Plataforma: "R$ 2.199,00", 
    Almofada: "R$1.199,99",
    Massageador_Black: "R$ 620,00",
    Colchao_Max: "Preço Sob Consulta",
    Esteira_Cromo: "R$ 1.970,00",
    Esteira_Rest: "R$ 2.890,00",
    Foot_Massage: "R$ 690,00",

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