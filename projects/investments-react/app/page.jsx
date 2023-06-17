'use client';

import { useState } from 'react';
import Investment from '@/components/Investment';
import CreateInvestmentDrawer from '@/components/CreateInvestmentDrawer';
import { investments as data } from './data';

export default function Home() {
  const [investments, setInvestments] = useState(data);
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsShowDrawer(!isShowDrawer);
  };

  const addInvestment = (investment) => {
    investment.id = new Date().getTime();

    setInvestments([...investments, investment]);
  };

  return (
    <>
      <div className="container mx-auto lg:max-w-screen-lg">
        <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
        <div className="investments grid grid-cols-3 gap-3">
          {investments.map((investment) => (
            <Investment investment={investment} key={investment.id} />
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
