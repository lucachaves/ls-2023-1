import InvestmentCard from '@/components/InvestmentCard';

export default function Home() {
  const investment = [
    {
      name: 'Tesouro IPCA+ 2035',
    },
    {
      name: 'Tesouro IPCA+ 2045',
    },
  ];

  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
      <div className="investments grid grid-cols-3 gap-3">
        <InvestmentCard name={investment[0].name} value={100} />
        <InvestmentCard name={investment[1].name} value={200} />
      </div>
    </div>
  );
}
