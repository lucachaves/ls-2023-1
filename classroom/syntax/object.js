// Representação denew Investo
// name: Tesouro Selic 2029
// value: 100
// origin: Tesouro Nacional
// category: Pos
// date: 22/03/2023
// interest: 100% Selic

// JSON - JavaScript Object Notation
const tesouroSelic = {
  name: 'Tesouro Selic 2029',
  value: 100,
  origin: 'Tesouro Nacional',
  category: 'Pos',
  date: '2023-03-22',
  interest: {
    tax: 'Selic',
    value: 1,
  },
};

console.log(tesouroSelic);

// Class Definition
class Investment {
  constructor(name, value, origin, category, date, interest) {
    this.name = name;
    this.value = value;
    this.origin = origin;
    this.category = category;
    this.date = date;
    this.interest = interest;
  }
}

const tesouroIpca = new Investment(
  'Tesouro IPCA 2029',
  100,
  'Tesouro Nacional',
  'IPCA',
  '2023-03-22',
  'IPCA + 5,83%'
);

console.log(tesouroIpca);

// Accessing properties
console.log(tesouroIpca['name']);
console.log(tesouroIpca.name);

tesouroIpca.interest = {
  tax: 'IPCA',
  value: 0.0583,
};

console.log(tesouroIpca);

console.table(tesouroIpca);

console.log(JSON.stringify(tesouroIpca, null, 2));

class Invest {
  #name;
  #value;
  #origin;
  #category;
  #date;
  #interest;

  constructor(name, value, origin, category, date, interest) {
    this.#name = name;
    this.#value = value;
    this.#origin = origin;
    this.#category = category;
    this.#date = date;
    this.#interest = interest;
  }
}

const tesouroPre = new Invest(
  'Tesouro Pre 2026',
  100,
  'Tesouro Nacional',
  'Pre',
  '2023-03-22',
  '12,14%'
);

console.log(tesouroPre.name);

// Property Shorthand
// const lca = {
//   name: 'BTG Pactual',
//   value: 100,
// };
const name = 'BTG Pactual';
const value = 100;

// const lca = {
//   name: name,
//   value: value,
// };

const lca = { name, value };

// Spread properties
const lciInter = {
  name: 'LCI Banco Inter',
  origin: 'Banco Inter',
};

const lci1Year = {
  ...lciInter,
  interest: '92% CDI',
};

const lci2Years = {
  ...lciInter,
  interest: '95% CDI',
};

// Property (variable)
const category = 'ipca';
const percent = 0.1;

const categories = {
  pos: 0.7,
  pre: 0.05,
  category: percent,
  [category]: percent,
};
