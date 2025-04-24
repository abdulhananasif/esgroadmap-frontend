export type TableRowType = {
  id: number;
  company: string;
  docURL: string;
  targetSentence: string;
  targetYears: number[];
  country: string;
  sectorCode: string;
  sectorName: string;
  uploadDate: string;
};

export type TableProps = {
  currentData: any[];
  tableHeaders: string[];
};
