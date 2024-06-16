import React from 'react'
import { useState } from 'react'
import { Icon } from '../../components/Icon'
import '../../components/Table/Table.style.scss'
import { Items } from '../Table/Table.types'

export default function renderRows(data: Items, level = 0) {
  const [editable, setEditable] = useState(true)
  const [hoveredRow, setHoveredRow] = useState(null)

  const handleMouseEnter = (index: any) => {
    setHoveredRow(index)
  }

  const handleMouseLeave = () => {
    setHoveredRow(null)
  }

  // Delete row
  const handleDelete = async (id: number) => {
    try {
      console.log('@delete', id)
    } catch (error) {
      console.error('Error deleting row:', error)
    }
  }

  // Add row
  const handleAdd = async (id: number, data: Items) => {
    try {
      console.log('@add', data)
    } catch (error) {
      console.error('Error deleting row:', error)
    }
  }
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
                onClick={() => handleAdd(data.id, data)}
              />
            </span>
            {hoveredRow === data.id && editable && (
              <Icon
                src={'./assets/icons/trash.svg'}
                alt={'trash'}
                onClick={() => handleDelete(data.id)}
              />
            )}
          </div>
        </td>
        <td>{data.rowName}</td>
        <td>{data.salary}</td>
        <td>{data.equipmentCosts}</td>
        <td>{data.overheads}</td>
        <td>{data.estimatedProfit}</td>
      </tr>
      {data.child &&
        data.child.map((child: any) => renderRows(child, level + 1))}
    </React.Fragment>
  )
}
