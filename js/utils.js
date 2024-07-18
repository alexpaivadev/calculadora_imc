// Função para calcular o Índice de Massa Corporal (IMC)
export function imc(weight, height) {
    // Calcula o IMC usando a fórmula: peso (kg) / (altura (m) ^ 2)
    // Converte a altura de centímetros para metros antes do cálculo
    return (weight / ((height / 100) ** 2)).toFixed(2); // Arredonda para 2 casas decimais
}

export function notNumber(value) {
    return isNaN(value) || value == '' 
}
