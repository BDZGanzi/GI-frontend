import React from 'react'
import { Menu } from 'antd'

const SideBar = ({ setSelectedKey }) => {
    const handleSwitch = (e) => setSelectedKey(e.key)

    return (
        <>
            <Menu onClick={handleSwitch} mode="horizontal">
                <Menu.Item key="stats">
                    基本信息
                </Menu.Item>
                <Menu.Item key="avatars">
                    人物角色
                </Menu.Item>
                <Menu.Item key="artifact">
                    圣遗物
                </Menu.Item>
                <Menu.Item key="abyss">
                    深渊
                </Menu.Item>
            </Menu>
        </>
    )
}

export default SideBar