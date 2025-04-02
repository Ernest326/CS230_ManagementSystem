import React from 'react';

type Column = {
    head: string;
    accessor?: string;
}

type TableProps = {
    columns: Column[];
    data: Record<string, any>[];
    onEdit?: (row: Record<string, any>, rowIndex: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onEdit }) => {

    return (
        <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full border border-gray-200 text-left text-sm">
          <thead className="bg-gray-100 text-xs font-semibold uppercase tracking-wider">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 text-gray-700">
                  {col.head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex%2==1?'bg-gray-500':'bg-gray-600'} hover:bg-gray-700`}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">
                    {col.accessor ? row[col.accessor] : null}
                  </td>
                ))}
                {onEdit && (
                    <td className="px-4 py-2">
                        <button onClick={() => onEdit(row, rowIndex)} className="text-blue-600 hover:text-blue-700">
                        Edit
                        </button>
                    </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table;