import { Row } from '../Row'
import { Items } from './Table.types'

import './Table.style.scss'

interface TableProps {
  data: Items[]
}

export default function Table({ data = [] }: TableProps) {
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
          <tbody>{data.map((data) => Row(data))}</tbody>
        </table>
      </div>
    </div>
  )
}
