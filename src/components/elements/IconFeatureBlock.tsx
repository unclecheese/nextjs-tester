import React from "react"
import { IconFeatureBlock } from "ss-schema"

const Block: React.FC<{ element: IconFeatureBlock }> = ({ element }) => {

    return <div>{element.__typename}</div>

}

export default Block