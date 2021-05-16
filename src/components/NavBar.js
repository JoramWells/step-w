import {  Input, Menu, message, Space } from "antd";
import React from "react";

const { Search } = Input;
export default function NavBar() {
    const onSearch = () => {
        message.info('Hay guy')
    };
  return (
    <nav className="menu">
        <div className="menu__logo" style={{marginTop:"1.2rem"}}>
            logo
        </div>
      <div className="menu__container">
        <Menu mode="horizontal">
          <Menu.Item style={{ marginBlock: ".5rem" }}>Categories</Menu.Item>

          <Space direction="horizontal">
            <Search onSearch={onSearch} placeholder="Seach" style={{ margin: "1rem" }} />
          </Space>
          <Menu.Item style={{ marginBlock: ".5rem" }}>Search</Menu.Item>
        </Menu>
      </div>
    </nav>
  );
}
