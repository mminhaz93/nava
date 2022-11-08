import React from 'react';

const Details = ({ state, employee, year }) => {
  return (
    <>
      <div className='my-3 flex flex-col items-center justify-between text-center sm:flex-row sm:text-left px-16 md:px-20 lg:px-28 gap-y-2'>
        <div>
          <div>State</div>
          <div className='font-semibold'>{state}</div>
        </div>
        <div>
          <div>Employees</div>
          <div className='font-semibold'>{employee}</div>
        </div>
        <div>
          <div>Year</div>
          <div className='font-semibold'>{year}</div>
        </div>
      </div>
    </>
  );
};

export default Details;
