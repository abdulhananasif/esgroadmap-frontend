import {CarbonSentenceType} from '../../pages/carbonReduction/type';
import {RenewablesDataType} from '../../pages/renewables/type';
import {SupplyChainDataType} from '../../pages/supplyChain/type';
import {WasteAndRecyclingType} from '../../pages/wasteAndRecycling/type';
import {WaterManagementType} from '../../pages/waterManagement/type';

export type TableProps = {
  data:
    | CarbonSentenceType[]
    | WasteAndRecyclingType[]
    | WaterManagementType[]
    | SupplyChainDataType[]
    | RenewablesDataType[];
};
