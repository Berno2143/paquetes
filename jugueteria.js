var peso_payaso = 112
var peso_muñeca = 75
var peso_maximo = 1000

var payasos = parseFloat(prompt("Introduce el número de payasos a enviar: "));
var muñecas = parseFloat(prompt ("Introduce el número de muñecas a enviar: "));

if (muñecas > peso_maximo) {
    alert("Tu paquete de muñecas rebasa el peso establecido")
} else {
    alert("Tu paquete de muñecas puede ser envaido, tiene el peso establecido")
}

if (payasos > peso_maximo) {
    alert("Tu paquete de payasos rebasa el peso establecido")
} else {
    alert("Tu paquete de payasos puede ser envaido, tiene el peso establecido")
}

peso_total = peso_payaso * payasos + peso_muñeca * muñecas
document.write("El peso total del paquete es " + peso_total)

