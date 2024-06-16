import { Icon } from '../Icon'

import './Header.style.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="header-icons">
        <Icon src={'./assets/icons/menu.svg'} alt={'menu'} />
        <Icon src={'./assets/icons/back-arrow.svg'} alt={'back-arrow'} />
      </div>
      <div className="header-tabs">
        <span className="active-tab">Просмотр</span>
        <span>Управление</span>
      </div>
    </div>
  )
}
