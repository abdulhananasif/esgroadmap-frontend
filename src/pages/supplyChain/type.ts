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

export type SupplyChainDataType = {
  totalPages: number;
  carbonSentence: SupplyChainType[];
};

export type SupplyChainType = {
  Company: string;
  Country: string;
  DocURL: string;
  SectorCode1: string;
  SectorName1: string;
  SentenceTargetYear: string;
  Target_sentence: string;
  id: number;
  upload_date: string;
};
