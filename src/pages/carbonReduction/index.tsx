import DashboardLayout from '../dashboardlayout';
import TableWithOptions from '../../components/tableWithOptions';
import ToolHeading from '../../components/toolHeading';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {CarbonReductionDataType} from './type';

const CarbonReduction = () => {
  const [carbonData, setCarbonData] = useState<CarbonReductionDataType | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchCarbonData = async (page: number) => {
    const res = await axios.get(
      `https://esgroadmap-backend.vercel.app/api/v1/tool/carbonReduction?page=${page}&limit=10`
    );
    setCarbonData(res.data);
  };

  useEffect(() => {
    fetchCarbonData(currentPage);
  }, [currentPage]);

  return (
    <DashboardLayout>
      <ToolHeading title="Carbon Reduction" />
      {carbonData && (
        <TableWithOptions
          data={carbonData}
          dataKey="carbonSentence"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </DashboardLayout>
  );
};

export default CarbonReduction;
