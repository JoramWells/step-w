import { Input, Menu, message, Space } from "antd";
import React from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {searchPost} from '../_actions/postActions'
const { Search } = Input;


function NavBar(props) {
  const dispatch = useDispatch()

  async function getData(){
    await dispatch(searchPost({keyword:"glad", min_videos:"2"}))
 }

  const onSearch = () => {
    message.info("Hey guy");
    getData()
    setTimeout(() => {
      props.history.push("/search");
    });
  };
  return (
    <nav className="menu">
      <div className="menu__logo">
        <Link to="/">
        Logo

        </Link>
      </div>
      <div className="menu__container">
        <Menu mode="horizontal">
          <Menu.Item style={{ marginBlock: ".5rem" }}>Categories</Menu.Item>

          <Space direction="horizontal">
            <Search
              onSearch={onSearch}
              placeholder="Seach"
              style={{ margin: "1rem" }}
            />
          </Space>
          <Menu.Item style={{ marginBlock: ".5rem" }}>Search</Menu.Item>
        </Menu>
      </div>
    </nav>
  );
}
export default withRouter(NavBar);
