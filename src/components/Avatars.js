import React from 'react'
import { Avatar, Typography, Space, Popover, Button } from 'antd'

const { Text } = Typography

const Avatars = ({ uid, avatars }) => {
    const hover = (avatar) => {
        return (
            <div>
                <p>等级：{avatar.level}</p>
                <p>星级：{avatar.rarity}</p>
                <p>好感度：{avatar.fetter}</p>
                <p>属性：{avatar.element}</p>
            </div>
        )
    }

    return (
        <>
            {avatars.map(avatar =>
                <Popover
                    key={avatar.id}
                    content={hover(avatar)}
                    title={avatar.name}
                    trigger='hover'>
                    <Button><Avatar src={avatar.image} size='small' />{avatar.name}</Button>
                </Popover>)}
        </>
    )
}

const AvatarDetail = ({ avatar }) => {
    return (
        <Space direction='vertical' align='center'>
            <Avatar src={avatar.image} />
            <Text>{avatar.name}</Text>
        </Space>
    )
}

export default Avatars