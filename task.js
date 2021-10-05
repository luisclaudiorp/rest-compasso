// mudar o primeiro rio grande para caxias
// ordenar por crescente e decrescente
// contagem da população

const payload = {
  name: 'teste',
  cidades: [{
    name: 'Rio Grande',
    populacao: '200'
  }, {
    name: 'Pelotas',
    populacao: '300'
  }, {
    name: 'Rio Grande',
    populacao: '2'
  }]
}

function teste (obj) {
  const { cidades } = obj
  cidades[0].name = 'Caxias do Sul'
  let element = []
  let total = 0
  for (let index = 0; index < cidades.length; index++) {
    element = parseInt(cidades[index].populacao)
    total += element
  }
  obj.populacaoTotal = total
  Object.assign(payload)
  return (payload)
}

const dataModify = teste(payload)
console.log(dataModify)
