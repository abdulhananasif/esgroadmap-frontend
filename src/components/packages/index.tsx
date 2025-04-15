import React from 'react';
import {PackageProp} from './type';
import {packageList} from './constant';

const Packages: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap gap-4 my-8 px-30">
      {packageList.map((pkg: PackageProp) => (
        <div
          key={pkg.id}
          className="w-full md:w-[48%] flex flex-col gap-3 text-center"
        >
          <div
            style={{
              backgroundColor: 'var(--theme-bg)',
            }}
            className="text-white  py-3 px-4 text-2xl font-semibold"
          >
            <span>{pkg.title}</span>
            <span>{' - '}</span>
            <span>{pkg.acces}</span>
          </div>

          <div className="flex flex-col items-center justify-center  text-center">
            <div className="relative">
              <span
                className="absolute top-2 left-2 text-2xl font-bold"
                style={{color: 'var(--themetext-color)'}}
              >
                {pkg.currency}
              </span>
              <div
                className="text-6xl font-bold leading-none px-6 mt-4"
                style={{color: 'var(--themetext-color)'}}
              >
                {pkg.amount.includes('.')
                  ? pkg.amount.split('.')[0]
                  : pkg.amount}
              </div>
              <span
                className="absolute top-2 -right-2 text-2xl font-medium"
                style={{color: 'var(--themetext-color)'}}
              >
                {pkg.amount.includes('.') ? pkg.amount.split('.')[1] : '00'}
              </span>
            </div>

            <div className="text-sm text-gray-700 mt-2">{pkg.duration}</div>
          </div>

          <ul className="pl-5 text-sm flex flex-col mx-1 mt-10">
            {pkg.features.map((feature: string, index: number) => (
              <li
                key={index}
                className="flex gap-2 items-center justify-center py-3 border-t-2 border-gray-200"
              >
                <img
                  src="/icons/circle-tick.svg"
                  alt="tick"
                  className="h-4 w-4"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Packages;
