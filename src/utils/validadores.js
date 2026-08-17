const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarEmail(valor) {
  return REGEX_EMAIL.test(valor.trim());
}

export function normalizarEmail(valor) {
  return valor.trim().toLowerCase();
}

export function avaliarSenha(senha) {
  const criterios = {
    tamanho: senha.length >= 12,
    maiuscula: /[A-Z]/.test(senha),
    minuscula: /[a-z]/.test(senha),
    numero: /[0-9]/.test(senha),
    simbolo: /[^A-Za-z0-9]/.test(senha),
  };

  const forte = Object.values(criterios).every(Boolean);

  return { criterios, forte };
}
