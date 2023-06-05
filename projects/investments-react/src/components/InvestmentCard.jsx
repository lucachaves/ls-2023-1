export default function InvestmentCard({ name, value }) {
  return (
    <div id="investment-1" className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-bold">Origem:</span> Tesouro Direto
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Categoria:</span> IPCA
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Data:</span> 05/06/2023
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Taxa:</span> IPCA + 5,72%
        </p>
      </div>
    </div>
  );
}
