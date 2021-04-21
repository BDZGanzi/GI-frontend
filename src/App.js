import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'
import Content from './components/Content'
import './App.css'


const App = () => {
  const [playerInfo, setPlayerInfo] = useState(null)
  const [playerUid, setPlayerUid] = useState(null)
  const [selectedKey, setSelectedKey] = useState(null)

  useEffect(() => {
    setSelectedKey('stats')
  },playerInfo)

  return (
    <>
      <SearchBar
        setPlayerInfo={setPlayerInfo}
        setPlayerUid={setPlayerUid}
      />
      <SideBar
        setSelectedKey={setSelectedKey}
      />
      {playerInfo === null
        ? '暂无数据'
        : <Content
          selectedKey={selectedKey}
          uid={playerUid}
          data={playerInfo.data}
        />
      }
    </>
  )
}

export default App
