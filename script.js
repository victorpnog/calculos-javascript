function iniciarPrograma() {
  // alerta de boas vindas

  alert("Bem-vindo(a) ao site!");

  // cada linha pede um numero

  let numero1 = Number(prompt("Digite o primeiro número:"));

  let numero2 = Number(prompt("Digite o segundo número:"));

  // realiza calculo

  let soma = numero1 + numero2;

  let subtracao = numero1 - numero2;

  let multiplicacao = numero1 * numero2;

  let divisao = numero1 / numero2;

  // resultado na console

  console.log("Resultado da Soma: " + soma);

  console.log("Resultado da Subtração: " + subtracao);

  console.log("Resultado da Multiplicação: " + multiplicacao);

  console.log("Resultado da Divisão: " + divisao);

  // resultado na tela

  document.write(
    "<div style='font-family: -apple-system, sans-serif; color: #1d1d1f; text-align: center; margin-top: 100px;'>",
  );

  document.write("<h2>Resultados:</h2>");

  document.write("<p>Soma: " + soma + "</p>");

  document.write("<p>Subtração: " + subtracao + "</p>");

  document.write("<p>Multiplicação: " + multiplicacao + "</p>");

  document.write("<p>Divisão: " + divisao + "</p>");

  document.write(
    "<br><a href='' style='color: #0066cc; text-decoration: none;'>Recarregar página</a>",
  );

  document.write("</div>");
}
