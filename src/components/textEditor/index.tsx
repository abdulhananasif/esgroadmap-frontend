import {useRef, useEffect, useState} from 'react';

const toolbarButtons = [
  {cmd: 'bold', icon: 'B'},
  {cmd: 'italic', icon: 'I'},
  {cmd: 'underline', icon: 'U'},
  {cmd: 'insertUnorderedList', icon: '•'},
  {cmd: 'insertOrderedList', icon: '1.'},
];

export default function TextEditor({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (html: string) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [activeCommands, setActiveCommands] = useState<string[]>([]);

  const updateContent = () => {
    const html = editorRef.current?.innerHTML || '';
    setIsEmpty(html === '' || html === '<br>');
    onChange?.(html);
    updateActiveCommands();
  };

  const handleCommand = (cmd: string) => {
    document.execCommand(cmd, false);
    updateContent();
  };

  const handleFormatBlock = (block: string) => {
    document.execCommand('formatBlock', false, block);
    updateContent();
  };

  const updateActiveCommands = () => {
    const active = toolbarButtons
      .filter((btn) => document.queryCommandState(btn.cmd))
      .map((btn) => btn.cmd);
    setActiveCommands(active);
  };

  useEffect(() => {
    if (editorRef.current && value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  useEffect(() => {
    document.addEventListener('selectionchange', updateActiveCommands);
    return () => {
      document.removeEventListener('selectionchange', updateActiveCommands);
    };
  }, []);

  return (
    <div className="border border-gray-300 rounded-md">
      {/* Toolbar */}
      <div className="flex items-center gap-2 border-b border-gray-300 p-2 mb-2">
        <select
          onChange={(e) => handleFormatBlock(e.target.value)}
          className="px-1 py-0.5 text-base"
          defaultValue="p"
        >
          <option value="p">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>

        {toolbarButtons.map((btn) => (
          <button
            key={btn.cmd}
            onClick={() => handleCommand(btn.cmd)}
            className={`px-2 py-1 text-base font-semibold hover:text-blue-800 ${
              activeCommands.includes(btn.cmd) ? 'text-blue-800' : ''
            }`}
            type="button"
          >
            {btn.icon}
          </button>
        ))}
      </div>

      {/* Content Editable */}
      <div className="relative">
        {isEmpty && (
          <div className="absolute top-0 left-0 text-gray-400 px-2 py-1 pointer-events-none select-none">
            Please describe your issue in detail...
          </div>
        )}
        <div
          ref={editorRef}
          contentEditable
          onInput={updateContent}
          onKeyUp={updateActiveCommands}
          onMouseUp={updateActiveCommands}
          className="min-h-[150px] px-2 py-1 outline-none"
          style={{whiteSpace: 'pre-wrap'}}
        />
      </div>
    </div>
  );
}
