'use client';

import { useEffect, useState } from 'react';
import InvestmentCard from '@/components/InvestmentCard';
import CreateInvestmentDrawer from '@/components/CreateInvestmentDrawer';
import API from '@/lib/api';

export default function Home() {
  const [investments, setInvestments] = useState([]);
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsShowDrawer(!isShowDrawer);
  };

  const addInvestment = async (investment) => {
    const newInvestment = await API.create('investments', investment);

    setInvestments([...investments, newInvestment]);
  };

  const loadData = async () => {
    const investments = await API.readAll('investments');

    setInvestments(investments);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment, index) => (
          <InvestmentCard investment={investment} key={index} />
        ))}
      </div>
      <div className="fixed bottom-8 right-8">
        <button
          className="mr-1.5 inline-block rounded bg-gray-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          type="button"
          onClick={() => toggleDrawer()}
        >
          +
        </button>
      </div>
      {isShowDrawer && (
        <CreateInvestmentDrawer
          toggleDrawer={toggleDrawer}
          addInvestment={addInvestment}
        />
      )}
    </>
  );
}
