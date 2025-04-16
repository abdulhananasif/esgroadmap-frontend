import {AuthBannerProps} from './type';
import {FunctionComponent} from 'react';

const AuthBanner: FunctionComponent<AuthBannerProps> = ({text}) => {
  return (
    <div className="w-full h-[10rem] bannerbg flex items-center justify-center">
      <h2 className=" text-[32px] font-semibold themetext">{text}</h2>
    </div>
  );
};

export default AuthBanner;
