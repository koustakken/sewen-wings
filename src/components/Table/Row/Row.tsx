import React from 'react'
import { useState } from 'react'
import { Icon } from '../../Icon'
import { Items } from '../Table.types'
import { Cell } from '../Cell'

import '../Table.style.scss'

interface RowProps {
  data: Items
  level: number
  handleAdd: (id: number, data: Items) => void
  handleDelete: (id: number) => void
  handleEdit: (id: number, data: Items) => void
}

export default function renderRows(props: RowProps) {
  const { data, level = 0, handleAdd, handleDelete, handleEdit } = props
  const [hoveredRow, setHoveredRow] = useState(null)
  const [editingData, setEditingData] = useState({ ...data })
  const [editableField, setEditableField] = useState<number | null>(null)

  const handleMouseEnter = (index: any) => {
    setHoveredRow(index)
  }

  const handleMouseLeave = () => {
    setHoveredRow(null)
  }

  const handleDoubleClick = (id: number) => {
    if (editableField !== id) {
      setEditableField(id)
      setEditingData({ ...data })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditingData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleEditSubmit = () => {
    if (editableField !== null) {
      handleEdit(data.id, editingData)
      setEditableField(null)
    }
  }

  const columns = [
    { key: 'rowName', title: 'Row Name' },
    { key: 'salary', title: 'Salary' },
    { key: 'equipmentCosts', title: 'Equipment Costs' },
    { key: 'overheads', title: 'Overheads' },
    { key: 'estimatedProfit', title: 'Estimated Profit' },
  ]

  return (
    <React.Fragment key={data.id}>
      <tr
        key={data.id}
        onDoubleClick={() => handleDoubleClick(data.id)}
        onKeyDown={(e) => (e.key === 'Enter' ? handleEditSubmit() : null)}
      >
        <td className="row-action">
          <div
            onMouseEnter={() => handleMouseEnter(data.id)}
            onMouseLeave={handleMouseLeave}
            className={'file' + (editableField !== null ? ' editable' : '')}
            style={{ paddingLeft: `${20 * level}px` }}
          >
            <span className={data?.level !== 0 ? 'node-child' : ''}>
              <Icon
                src={'./assets/icons/file.svg'}
                alt={'file'}
                onClick={() => handleAdd(data.id, data)}
              />
            </span>
            {hoveredRow === data.id && editableField !== null && (
              <Icon
                src={'./assets/icons/trash.svg'}
                alt={'trash'}
                onClick={() => handleDelete(data.id)}
              />
            )}
          </div>
        </td>
        {columns.map((column) => (
          <td key={column.key} className="cell">
            <Cell
              value={editingData[column.key as keyof Items]}
              name={column.key}
              editable={editableField !== null}
              onChange={handleInputChange}
            />
          </td>
        ))}
      </tr>
      {data.child &&
        data.child.map((child: any) =>
          renderRows({
            data: child,
            level: level + 1,
            handleAdd,
            handleDelete,
            handleEdit,
          })
        )}
    </React.Fragment>
  )
}
