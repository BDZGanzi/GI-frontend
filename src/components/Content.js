import React, { useEffect } from 'react'
import PlayerInfo from './PlayerInfo'
import Avatars from './Avatars'

const Content = ({selectedKey, uid, data}) => {

    const renderContent =(key) => {
        if(key == 'stats'){
            return <PlayerInfo uid={uid} stats={data.stats}/>
        }
        if(key == 'avatars'){
            return <Avatars uid={uid} avatars={data.avatars}/>
        }
        if(key == 'artifact'){
            return data.avatars.map(avatar => avatar.name)
        }
        if(key == 'abyss'){
            return data.avatars.map(avatar => avatar.name)
        }
    }
    return (
        <>
            {renderContent(selectedKey)}
        </>
    )
}

export default Content