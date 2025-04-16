import React from 'react';
import {PackageProp} from './type';
import {packageList} from './constant';
import {Link} from 'react-router-dom';
import Button from '../ui/button';

const Packages: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap gap-4 my-8 px-30">
      {packageList.map((pkg: PackageProp) => (
        <div
          key={pkg.id}
          className="w-full md:w-[48%] flex flex-col gap-3 text-center"
        >
          <div className="textwhite  py-3 px-4 text-2xl font-semibold themebg">
            <span>{pkg.title}</span>
            <span>{' - '}</span>
            <span>{pkg.acces}</span>
          </div>

          <div className="flex flex-col items-center justify-center  text-center">
            <div className="relative">
              <span className="absolute top-2 left-2 text-2xl font-bold themetext">
                {pkg.currency}
              </span>
              <div className="text-6xl font-bold leading-none px-6 mt-4 themetext">
                {pkg.amount.includes('.')
                  ? pkg.amount.split('.')[0]
                  : pkg.amount}
              </div>
              <span className="absolute top-2 -right-2 text-2xl font-medium themetext">
                {pkg.amount.includes('.') ? pkg.amount.split('.')[1] : '00'}
              </span>
            </div>

            <div className="text-sm textgray mt-2">{pkg.duration}</div>
          </div>

          <ul className="pl-5 text-sm flex flex-col mx-1 mt-10">
            {pkg.features.map((feature: string, index: number) => (
              <li
                key={index}
                className="flex gap-1 items-center justify-center py-3 px-15 border-t-2 bordergray"
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
          <Link to="/auth/membership-account/membership-checkout">
            <Button type="submit" label="Signup" className="mt-5 themebg" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Packages;
