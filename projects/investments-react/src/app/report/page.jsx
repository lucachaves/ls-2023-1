'use client';

import { useEffect, useState } from 'react';
import API from '@/lib/api';
import { formatCurrency } from '@/lib/utils';

export default function Report() {
  const [report, setReport] = useState({
    total: 0,
    quantity: 0,
    origins: 0,
    categories: 0,
  });

  const loadData = async () => {
    const investments = await API.readAll('investments');

    const total = investments.reduce((acc, invest) => acc + invest.value, 0);

    const quantity = investments.length;

    const origins = investments
      .reduce((acc, invest) => {
        if (!acc.includes(invest.origin)) {
          acc.push(invest.origin);
        }
        return acc;
      }, [])
      .join(', ');

    const categories = investments
      .reduce((acc, invest) => {
        if (!acc.includes(invest.categories?.name)) {
          acc.push(invest.categories?.name);
        }
        return acc;
      }, [])
      .join(', ');

    const newReport = {
      total,
      quantity,
      origins,
      categories,
    };

    console.log(newReport);

    setReport(newReport);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl my-12 font-bold">Extrato</h1>
      <div className="grid grid-cols-4 gap-3">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Valor Total
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {formatCurrency(report.total)}
          </p>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Investimentos
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {report.quantity}
          </p>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Categorias
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {report.categories}
          </p>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Origens
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {report.origins}
          </p>
        </div>
      </div>
    </>
  );
}
