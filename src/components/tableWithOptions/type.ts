import {CarbonReductionDataType} from '../../pages/carbonReduction/type';
import {Dispatch, SetStateAction} from 'react';

export interface TableWithOptionsProps {
  data: CarbonReductionDataType;
  dataKey: 'carbonSentence';
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
