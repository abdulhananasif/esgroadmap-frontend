import {FunctionComponent} from 'react';
import {DropdownButtonProps} from './type';

const DropdownButton: FunctionComponent<DropdownButtonProps> = ({image}) => {
  return (
    <div className="border border-gray-400 rounded-md flex items-center cursor-pointer">
      <div className="px-4 py-2">
        <img src={image} alt="download" className="h-5 w-5" />
      </div>
      <div className="px-4 py-2 border-l border-gray-300">
        <img src="/icons/angle-down.svg" alt="angle-down" className="h-5 w-5" />
      </div>
    </div>
  );
};

export default DropdownButton;
