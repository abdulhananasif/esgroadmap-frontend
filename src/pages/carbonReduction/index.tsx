import DashboardLayout from '../dashboardlayout';
import TableWithOptions from '../../components/tableWithOptions';
import ToolHeading from '../../components/toolHeading';

const CarbonReduction = () => {
  return (
    <DashboardLayout>
      <ToolHeading title="Carbon Reduction" />
      <TableWithOptions />
    </DashboardLayout>
  );
};

export default CarbonReduction;
