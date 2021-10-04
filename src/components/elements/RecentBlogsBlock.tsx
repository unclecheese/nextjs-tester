import React from "react"
import { RecentBlogsBlock } from "ss-schema"

const Block: React.FC<{ element: RecentBlogsBlock }> = ({ element }) => {

    return <div>{element.__typename}</div>

}

export default Block