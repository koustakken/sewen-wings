import React from 'react'
import { useState } from 'react'
import { Icon } from '../Icon'

import './Table.style.scss'

interface TableProps {
  data: any
}

export default function Table({ data = [] }: TableProps) {
  const [editable, setEditable] = useState(true)
  const [hoveredRow, setHoveredRow] = useState(null)

  const handleMouseEnter = (index: any) => {
    setHoveredRow(index)
  }

  const handleMouseLeave = () => {
    setHoveredRow(null)
  }

  const renderRows = (data: any, level = 0) => {
    return (
      <React.Fragment key={data.id}>
        <tr key={data.id}>
          <td className="row-action">
            <div
              onMouseEnter={() => handleMouseEnter(data.id)}
              onMouseLeave={handleMouseLeave}
              className={'file' + (editable ? ' editable' : '')}
              style={{ paddingLeft: `${20 * level}px` }}
            >
              <span className={data?.level !== 0 ? 'node-child' : ''}>
                <Icon
                  src={'./assets/icons/file.svg'}
                  alt={'file'}
                  onClick={() => console.log(data)}
                />
              </span>
              {hoveredRow === data.id && editable && (
                <Icon src={'./assets/icons/trash.svg'} alt={'trash'} />
              )}
            </div>
          </td>
          <td>{data.rowName}</td>
          <td>{data.salary}</td>
          <td>{data.eqipment}</td>
          <td>{data.overheads}</td>
          <td>{data.estimatedProfit}</td>
        </tr>
        {data.child &&
          data.child.map((child: any) => renderRows(child, level + 1))}
      </React.Fragment>
    )
  }

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
          <tbody>{data.map((data: any) => renderRows(data))}</tbody>
        </table>
      </div>
    </div>
  )
}
