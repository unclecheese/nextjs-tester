import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "../../components/elements/ElementalArea"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOneBlog }}) => {
    const queryResult = readOneBlog
    const elements = queryResult?.elementalArea?.elements.nodes ?? []
    
    return (
        <PageLayout page={readOneBlog}>
            <ElementalArea elements={elements} />
        </PageLayout>
    )
}

export default Page