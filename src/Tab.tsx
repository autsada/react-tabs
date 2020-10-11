import React from 'react'

import { TabName } from './App'

interface Props {
  activeTab: TabName
  name: TabName
  onSelectTab: (tab: TabName) => void
}

const Tab: React.FC<Props> = ({ activeTab, name, onSelectTab }) => {
  return (
    <h3
      className={activeTab === name ? 'tab--active' : 'tab'}
      onClick={() => onSelectTab(name)}
    >
      {name}
    </h3>
  )
}

export default Tab
