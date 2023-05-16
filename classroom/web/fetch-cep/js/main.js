async function getCEP(cep) {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);

    const cepData = await response.json();

    console.log(JSON.stringify(cepData, null, 2));

    console.log(cepData.localidade);
  } catch (error) {
    console.log(error.message);
  }
}

getCEP('01001000');
