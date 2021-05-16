import { Menu } from 'antd'
import React from 'react'

export default function NavBar() {
    return (
        <nav className="menu">
            <div className="menu__logo">
               gagaga 
            </div>
            <div className="menu__container">
                <Menu>
                    <Menu.Item>
                        Search
                    </Menu.Item>
                </Menu>
            </div>
            
        </nav>
    )
}
