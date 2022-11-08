import React, { useState } from 'react';
import { currency } from '../util/helpers';
import Details from './Details';

const CompanyCard = ({ company }) => {
  const [show, setShow] = useState(false);

  const {
    company_state,
    employee_count,
    plan_year,
    company_name,
    premium_sum,
    broker_commission_sum,
    participants_sum,
  } = company;

  return (
    <div className='p-4 lg:w-3/5 w-full'>
      <div className='flex border border-gray-900 border-opacity-50 pt-8 pb-3  flex-col text-center'>
        <h2 className='text-lg title-font font-semibold mb-3'>{company_name}</h2>
        <Details
          state={company_state}
          employee={employee_count}
          year={plan_year}
        />

        <hr className='border-spacing-1 w-11/12 my-2 mx-auto' />
        <button
          className='inline-flex  text-sky-700 border-0 py-1 px-4 focus:outline-none hover:text-sky-800 rounded mx-auto'
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          {show ? 'Show less' : 'Show more'}
          {show ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 15.75l7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </button>
        {show && (
          <div className='flex flex-col mt-5 gap-2 items-start mx-auto'>
            <div>
              <span className='font-semibold mr-1'>Premium:</span>
              {currency(premium_sum)}
            </div>
            <div>
              <span className='font-semibold mr-1'>Participants:</span>
              {participants_sum}
            </div>
            <div>
              <span className='font-semibold mr-1'>Broker Commissions:</span>
              {currency(broker_commission_sum)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
