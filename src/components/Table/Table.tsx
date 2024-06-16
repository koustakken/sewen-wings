import { useState } from 'react'
import { Icon } from '../Icon'

import './Table.style.scss'

export default function Table() {
  const [editable, setEditable] = useState(true)
  const [hoveredRow, setHoveredRow] = useState(null)
  const handleMouseEnter = (index: any) => {
    setHoveredRow(index)
  }

  const handleMouseLeave = () => {
    setHoveredRow(null)
  }
  const testData = [
    {
      level: 0,
      rowName: 'Южная строительная площадка',
      salary: '20 348',
      eqipment: '1 750',
      overheads: '108,07',
      estimatedProfit: '1 209 122,5',
    },
  ]

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
            {testData.map((data, index) => (
              <tr key={data.level}>
                <td className="row-action">
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={'file' + (editable ? ' editable' : '')}
                  >
                    <Icon
                      src={'./assets/icons/file.svg'}
                      alt={'file'}
                      onClick={() => console.log(data)}
                    />
                    {hoveredRow === index && editable && (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
