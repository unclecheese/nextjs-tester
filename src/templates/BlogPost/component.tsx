import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "../../components/elements/ElementalArea"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOneBlogPost }}) => {
    const queryResult = readOneBlogPost
    const elements = queryResult?.elementalArea?.elements.nodes ?? []
    
    return (
        <PageLayout page={readOneBlogPost}>
            <ElementalArea elements={elements} />
        </PageLayout>
    )
}

export default Page