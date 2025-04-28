import DashboardLayout from '../dashboardlayout';
import ToolHeading from '../../components/toolHeading';
import Button from '../../components/ui/button';
import {Link} from 'react-router-dom';
import {tickets} from './constant';

const SupportTicket = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <ToolHeading title="Your Support Tickets" />
        <Link to="/new-ticket">
          <Button
            type="submit"
            label="New Ticket"
            className="my-5 me-5 w-full sm:w-auto buttonbg"
          />
        </Link>
      </div>
      <div className="overflow-x-auto px-5">
        <div className="relative">
          <div className="max-h-[500px] scrollbar-hidden">
            <div className="overflow-x-auto overflow-hidden">
              <div className="min-w-[800px] sm:min-w-full">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="themebg text-white font-semibold sticky top-0 rounded-t-lg">
                    <tr>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs uppercase tracking-wider">
                        S.NO
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs uppercase tracking-wider">
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 border border-gray-200 text-[#535862]">
                    {tickets.map((ticket) => (
                      <tr key={ticket.id}>
                        <td className="px-4 sm:px-6 py-4 text-center whitespace-nowrap font-bold text-sm">
                          {ticket.sr}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center whitespace-nowrap text-sm">
                          {ticket.title}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-4 py-1.5 rounded-lg font-semibold text-xs ${
                              ticket.status.toLowerCase() === 'open'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center text-sm">
                          {ticket.createdAt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportTicket;
