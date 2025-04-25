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
  const fetchCarbonData = async () => {
    const res = await axios.get(
      'https://esgroadmap-backend.vercel.app/api/v1/tool/carbonReduction?page=1&limit=10'
    );
    setCarbonData(res.data);
  };
  useEffect(() => {
    fetchCarbonData();
  }, []);
  return (
    <DashboardLayout>
      <ToolHeading title="Carbon Reduction" />
      {carbonData && (
        <TableWithOptions data={carbonData} dataKey="carbonSentence" />
      )}
    </DashboardLayout>
  );
};

export default CarbonReduction;
