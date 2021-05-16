import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { listPost } from "../_actions/postActions";
import { List,AutoSizer } from "react-virtualized";

export default function HomeScreen() {
  const PostList = useSelector((state) => state.postList);
  const { loading, posts, error } = PostList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPost());
    return () => {};
  }, []);
  return (
    <div
      style={{
        maxWidth: "50%",
        display: "block",
        margin: "auto",
        padding: "1rem",
      }}
    >
      <Row justify="space-around" align="middle" gutter={[16, 16]}>
        {loading ? (
          <div>Loading..</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div style={{width:"100%", height:"100vh"}}>
            <AutoSizer>
              {({width,height})=>(
                <List
                width={width}
                height={height}
                rowHeight={50}
                rowCount={posts.length}
                rowRenderer={({ key, index, style, parent }) => {
                  const post = posts[index];
                  return (
                    <Col key={key}>
                      <Card>
                        <h3>{post.id}</h3>
                        {post.description}</Card>
                    </Col>
                  );
                }}
              />

              )}
            </AutoSizer>
            
          </div>
        )}
      </Row>
    </div>
  );
}
