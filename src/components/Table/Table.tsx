import Row from './Row/Row'
import { Items } from './Table.types'

import './Table.style.scss'

interface TableProps {
  data: Items[]
  columns: { key: string; title: string }[]
  handleAdd: (id: number, data: Items) => void
  handleDelete: (id: number) => void
  handleEdit: (id: number, data: Items) => void
}

export default function Table({
  data = [],
  columns,
  handleAdd,
  handleDelete,
  handleEdit,
}: TableProps) {
  return (
    <div className="content">
      <div className="table-header">Строительно-монтажные работы</div>
      <div className="table-content">
        <table className="table">
          <thead>
            <tr>
              <th>Уровень</th>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData) => (
              <Row
                key={rowData.id}
                data={rowData}
                level={rowData?.level || 0}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                columns={columns}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
