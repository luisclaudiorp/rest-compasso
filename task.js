// mudar o primeiro rio grande para caxias
// ordenar por crescente e decrescente
// contagem da população

// const payload = {
//   name: "teste",
//   cidades: [
//     { name: "Rio Grande", populacao: "200" },
//     { name: "Pelotas", populacao: "300" },
//     { name: "Rio Grande", populacao: "2" },
//   ],
// };

// const { cidades } = payload;
// const total = cidades.reduce(
//   (valInit, elem) => valInit + parseInt(elem.populacao),
//   0
// );
// const city = cidades.find((elem) => elem.name === "Rio Grande");
// city.name = "Caxias do Sul";
// console.log(total, city);

// function task (obj) {
//   const { cidades } = obj
//   cidades[0].name = 'Caxias do Sul'
//   let element = []
//   let total = 0
//   for (let index = 0; index < cidades.length; index++) {
//     element = parseInt(cidades[index].populacao)
//     total += element
//   }
//   cidades.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1
//     }
//     if (a.name < b.name) {
//       return -1
//     }
//     return 0
//   })
//   obj.populacaoTotal = total
//   Object.assign(payload)
//   return (payload)
// }
// console.log(task(payload))

const query = {
  name: "rio",
};

function regex(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key, value)) {
      const element = new RegExp(obj[key]);
      return element;
    }
  }
}

console.log(regex(query));

//console.log(Object.entries(query));

// Object.entries(query).forEach(([key, value]) => {
//   query.RegExp(query[key])
// });

// console.log(newObj);
