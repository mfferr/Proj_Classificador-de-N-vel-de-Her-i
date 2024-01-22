let nomeH = "Batman";
let nivel = "";
let qtdXP = 8000;

if (qtdXP <= 1000) {
  nivel = "Ferro"
} else if (qtdXP <= 2000) {
  nivel = "Bronze"
} else if (qtdXP <= 6000) {
  nivel = "Prata"
} else if (qtdXP <= 7000) {
  nivel = "Ouro"
} else if (qtdXP <= 8000) {
  nivel = "Platina"
} else if (qtdXP <= 9000) {
  nivel = "Ascendente"
} else if (qtdXP <= 10000) {
  nivel = "Imortal"
} else if (qtdXP >= 10001) {
  nivel = "Radiante"
}

console.log("O Herói " + nomeH + " está no nível : " + nivel)