import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "../../components/elements/ElementalArea"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOneProperty }}) => {
    const queryResult = readOneProperty
    const elements = queryResult?.elementalArea?.elements.nodes ?? []
    
    return (
        <PageLayout page={readOneProperty}>
            <ElementalArea elements={elements} />
        </PageLayout>
    )
}

export default Page