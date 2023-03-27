const companies = [
  {
    name: 'Amazon',
    founded: 1994,
    industry: ['E-Commerce', 'Cloud'],
  },
  {
    name: 'Facebook',
    founded: 2004,
    industry: ['Social'],
  },
  {
    name: 'Alphabet Inc.',
    founded: 2015,
    industry: ['Search', 'Cloud', 'Advertising'],
  },
];

// sorting array of string
companies.sort((a, b) => a.name.localeCompare(b.name));

companies.forEach((company) => {
  company.kind = 'Internet company';
});

const MAX_NAME_LENGHT = Math.max(
  ...companies.map((company) => company.name.length)
);

function show(companies) {
  return companies
    .map((company) => {
      return [
        company.name.padEnd(MAX_NAME_LENGHT + 3, '.'),
        company.founded,
      ].join('');
    })
    .join('\n');
}

// console.table(companies);
console.log(show(companies));
