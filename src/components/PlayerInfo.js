import React from 'react'
import { Card, Descriptions} from 'antd'

const PlayerInfo = ({stats, uid}) => {
    return (
        // <Card style={{ width: '40%' }}>
        //     <p>玩家{uid}的基本信息</p>
        //     <p>活跃天数：{stats.active_day_number}</p>
        //     <p>成就数：{stats.achievement_number}</p>
        //     <p>以获取人物：{stats.avatar_number}</p>
        //     <p>本期深渊：{stats.spiral_abyss}</p>

        // </Card>
        <Descriptions bordered size='middle'>
            <Descriptions.Item label='活跃天数'>{stats.active_day_number}</Descriptions.Item>
            <Descriptions.Item label='成就数量'>{stats.achievement_number}</Descriptions.Item>
            <Descriptions.Item label='已获取角色数量'>{stats.avatar_number}</Descriptions.Item>
            <Descriptions.Item label='本期深渊'>{stats.spiral_abyss}</Descriptions.Item>
            <Descriptions.Item label='珍贵宝箱'>{stats.precious_chest_number}</Descriptions.Item>
            <Descriptions.Item label='豪华宝箱'>{stats.luxurious_chest_number}</Descriptions.Item>
            <Descriptions.Item label='风神瞳'>{stats.anemoculus_number}</Descriptions.Item>
            <Descriptions.Item label='岩神瞳'>{stats.geoculus_number}</Descriptions.Item>
            <Descriptions.Item label='传送点'>{stats.way_point_number}</Descriptions.Item>
            <Descriptions.Item label='已开秘境'>{stats.domain_number}</Descriptions.Item>
        </Descriptions>
    )
}

export default PlayerInfo