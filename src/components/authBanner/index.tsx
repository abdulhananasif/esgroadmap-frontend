import {AuthBannerProps} from './type';

const AuthBanner: React.FC<AuthBannerProps> = ({text}) => {
  return (
    <div className="w-full h-[12rem] bg-[#E5ECED] flex items-center justify-center">
      <h2 className="text-[#219E99] text-[32px] font-semibold">{text}</h2>
    </div>
  );
};

export default AuthBanner;
