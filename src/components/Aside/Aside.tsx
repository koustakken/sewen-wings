import { Icon } from '../Icon'
import './Aside.style.scss'

export default function Aside() {
  const projects = [
    { icon: './assets/icons/table.svg', name: 'По проекту' },
    { icon: './assets/icons/table.svg', name: 'Объекты' },
    { icon: './assets/icons/table.svg', name: 'РД' },
    { icon: './assets/icons/table.svg', name: 'МТО' },
    { icon: './assets/icons/table.svg', name: 'СМР' },
    { icon: './assets/icons/table.svg', name: 'График' },
    { icon: './assets/icons/table.svg', name: 'МиМ' },
    { icon: './assets/icons/table.svg', name: 'Рабочие' },
    { icon: './assets/icons/table.svg', name: 'Капвложения' },
    { icon: './assets/icons/table.svg', name: 'Бюджет' },
    { icon: './assets/icons/table.svg', name: 'Финансирование' },
    { icon: './assets/icons/table.svg', name: 'Панорамы' },
    { icon: './assets/icons/table.svg', name: 'Камеры' },
    { icon: './assets/icons/table.svg', name: 'Поручения' },
    { icon: './assets/icons/table.svg', name: 'Контрагенты' },
  ]
  return (
    <div className="aside">
      <div className="aside-header">
        <div>
          <p>Название проекта</p>
          <span>Аббревиатура</span>
        </div>
        <Icon src={'./assets/icons/down-arrow.svg'} alt={'down-arrow'} />
      </div>
      <div className="aside-content">
        {projects.map((project) => (
          <div className="aside-item">
            <Icon src={project.icon} alt={project.name} />
            <span>{project.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
