import { formatCurrency, formatDate } from '@/lib/utils';

export default function Investment({ investment }) {
  return (
    <div
      id={`investment-${investment.id}`}
      className="bg-white shadow-md rounded-lg p-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">
          {investment.name}
        </h3>
        <p className="text-lg font-semibold text-gray-700">
          {formatCurrency(investment.value)}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-bold">Origem:</span> {investment.origin}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Categoria:</span> {investment.category}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Data:</span>{' '}
          {formatDate(investment.created_at)}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Taxa:</span> {investment.interest}
        </p>
      </div>
    </div>
  );
}
