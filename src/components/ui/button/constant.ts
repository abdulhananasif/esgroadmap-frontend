import {Variant} from './type';

export const baseStyles =
  'px-4 py-2 rounded text-white font-medium transition duration-200';

export const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700',
  secondary: 'bg-gray-600 hover:bg-gray-700',
  danger: 'bg-red-600 hover:bg-red-700',
};
