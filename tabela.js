let pessoas = [
    { nome: "Ana", idade: 18 },
    { nome: "Maria", idade: 20 },
    { nome: "José", idade: 17 },
    { nome: "Marcos", idade: 22 },
    { nome: "gabriel", idade: 19},
    { nome: "carlos", idade: 22},
    { nome: "laura", idade: 18},
  ];
  let people = [{ name: "VAZIO", birth_year: "VAZIO" }];
  let currentPage = "https://swapi.dev/api/people";
  let nextPage = null;
  const objTraducao = {
    name: "Nome",
    height: "Altura",
  };
  
  const btFetch = document.getElementById("btFetch");
  const btProxPag = document.getElementById("btProxPag");
  const tabela = document.getElementById("lista");
  const listaFetch = document.getElementById("listaFetch");
  
  function exibirLista() {
    tabela.innerHTML = "";
    for (let i = 0; i < pessoas.length; ++i) {
      const textNode = document.createTextNode(
        `Nome: ${pessoas[i].nome} Idade: ${pessoas[i].idade}`
      );
      const tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      tabela.appendChild(tdNode);
    }
  }
  
  function exibirListaStarWars() {
    btProxPag.disabled = nextPage == null;
    listaFetch.innerHTML = "";
    for (let i = 0; i < people.length; ++i) {
      let str = "";
      for (let campo in people[i]) {
        str += `${objTraducao[campo]}: ${people[i][campo]}\n`;
      }
      const textNode = document.createTextNode(
        `Nome: ${people[i].name} 
        Ano de Nascimento: ${people[i].birth_year} - ${str}`
      );
      const tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      tdstaFetch.appendChild(tdNode);
    }
  }
  
  const fetchStarWarsPeople = () => {
    fetch(currentPage)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        people = data.results;
        nextPage = data.next;
        exibirListaStarWars();
      })
      .catch((err) => {
        console.log("Erro recebido: ", err);
      });
  };
  
  const fetchProxPag = () => {
    currentPage = nextPage;
    nextPage = null;
    fetchStarWarsPeople();
  };
  
  btFetch.onclick = fetchStarWarsPeople;
  btProxPag.onclick = fetchProxPag;
  
  exibirLista();
  exibirListaStarWars();