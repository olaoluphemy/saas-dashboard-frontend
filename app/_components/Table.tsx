import { P } from "./Paragraph";

interface TableProps<TRowData> {
  cols: string;
  colData: string[];
  rowData: TRowData[];
  render: (data: TRowData, i: number) => React.ReactNode;
  tableStyle: string;
  tableheadStyle: string;
}

function Table<TRowData>({
  cols, //cols: grid-cols-[1fr_2fr]
  colData,
  rowData,
  render,
  tableStyle,
  tableheadStyle,
}: TableProps<TRowData>) {
  return (
    <div
      className={`w-full overflow-x-auto h-fit border border-none bg-white dark:border dark:bg-gray-900 transition-colors duration-[300ms] ease-in dark:border-gray-700 ${tableStyle}`}
    >
      <div className={`min-w-[600px] divide divide-white-100`}>
        <div className={`grid ${cols} ${tableheadStyle}`}>
          {colData.map((curCol, i) => (
            <P key={i} size="lg" className={`${i == 0 && "pl-5"} font-[600`}>
              {curCol}
            </P>
          ))}
        </div>
        <div className="divide divide-white-200">{rowData.map(render)}</div>
      </div>
    </div>
  );
}

export default Table;
