import DashboardLayout from '../dashboardlayout';
import ToolHeading from '../../components/toolHeading';
import {useState} from 'react';
import TextEditor from '../../components/textEditor';

const NewSupportTicket = () => {
  const [title, setTitle] = useState('');
  const [editorContent, setEditorContent] = useState('');
  return (
    <DashboardLayout>
      <ToolHeading title="Raise New Ticket" />
      <div className="px-5 flex flex-col space-y-2">
        <label className="font-semibold text-lg">Title</label>
        <input
          id="title"
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="font-semibold text-lg">Description</label>
        <TextEditor value={editorContent} onChange={setEditorContent} />
      </div>
    </DashboardLayout>
  );
};

export default NewSupportTicket;
