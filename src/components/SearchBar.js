import React from 'react'
import { Input } from 'antd'
import playerService from '../service/player'

const { Search } = Input

const SearchBar = ({ setPlayerUid, setPlayerInfo }) => {

  const onSearch = async (uid) => {
    setPlayerUid(uid)
    const playerInfo = await playerService.getPlayerInfoByUid(uid)
    setPlayerInfo(playerInfo)
  }

  return (
    <Search 
      placeholder="请输入正确的 UID" 
      onSearch={onSearch} 
      enterButton　allowClear/>
  )
}

export default SearchBar