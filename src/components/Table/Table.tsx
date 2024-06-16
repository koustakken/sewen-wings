import { Row } from './Row'
import { Items } from './Table.types'

import './Table.style.scss'

interface TableProps {
  data: Items[]
  handleAdd: (id: number, data: Items) => void
  handleDelete: (id: number) => void
  handleEdit: (id: number, data: Items) => void
}

export default function Table({
  data = [],
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
              <th>Наименование работ</th>
              <th>Основная з/п</th>
              <th>Оборудование</th>
              <th>Накладные расходы</th>
              <th>Сметная прибыль</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) =>
              Row({ data, level: 0, handleAdd, handleDelete, handleEdit })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
