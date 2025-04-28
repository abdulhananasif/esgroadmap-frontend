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

export type CarbonReductionDataType = {
  totalPages: number;
  carbonSentence: CarbonSentenceType[];
};

export type CarbonSentenceType = {
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
