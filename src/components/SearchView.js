import { Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchView() {
    const PostDetail = useSelector(state=>state.detail)
    const {loadingDetail, postDetail, errorDetail} = PostDetail

    return (
        <div>
            {loadingDetail ?(
                <div>Loading</div>
            ): errorDetail ?(<div>{errorDetail}</div>):(
                <div>
                    {postDetail.map(post=>(
                        <Card style={{ height: 150, overflowY: 'scroll', marginTop: 10 }} >
                            {post.description}
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
