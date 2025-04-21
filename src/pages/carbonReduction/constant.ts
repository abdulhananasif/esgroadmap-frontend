import {TableRowType} from './type';

export const rowData: TableRowType[] = Array.from({length: 40}, (_, i) => ({
  id: 516934 + i,
  company: '3M Company',
  docURL: '#',
  targetSentence: 'reduce scope 1 and 2 emissions by 50%...',
  targetYears: [2025, 2030, 2050],
  country: 'US',
  sectorCode: '339112',
  sectorName: 'Surgical and Medical Instrument Manufacturing',
  uploadDate: '15-01-2024 00:00',
}));

export const tableHeaders = [
  'ID',
  'Company',
  'DocURL',
  'Target Sentence',
  'Target Year(s)',
  'Country',
  'sector code #1',
  'sector name #1 (NAICS)',
  'Upload Date',
];
