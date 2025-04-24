import DashboardLayout from '../dashboardlayout';
import TableWithOptions from '../../components/tableWithOptions';
import ToolHeading from '../../components/toolHeading';
import {useEffect, useState} from 'react';
import axios from 'axios';

const CarbonReduction = () => {
  const [carbonData, setCarbonData] = useState<any>([]);
  const fetchCarbonData = async () => {
    const res = await axios.get(
      'http://localhost:8005/api/v1/tool/carbonReduction?page=1&limit=10'
    );
    setCarbonData(res.data);
  };
  useEffect(() => {
    fetchCarbonData();
  }, []);
  return (
    <DashboardLayout>
      <ToolHeading title="Carbon Reduction" />
      <TableWithOptions carbonData={carbonData} />
    </DashboardLayout>
  );
};

export default CarbonReduction;
