import React from "react"
import { FeaturedPropertiesBlock, Property } from "ss-schema"
import { CalendarIcon } from "@heroicons/react/outline"
import Link from "next/link"

type PropertyWithTimestamp = Property & {
    timestamp: string
}

const Block: React.FC<{ element: FeaturedPropertiesBlock }> = ({ element }) => {
    const { property1, property2, property3, subheadline } = element
    const properties = [ property1!, property2!, property3! ] as Array<PropertyWithTimestamp>

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Featured properties
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                {subheadline}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {properties.map(property => (
              <div
                key={property.hashID}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={property.primaryImage?.absoluteLink!}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-purple-600">
                      <a href="#" className="hover:underline">
                        {property.region?.title ?? `No region`}
                      </a>
                    </p>
                    <Link href={property.link}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {property.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {property.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div>
                      <div className="flex space-y-2 justify-between flex-col text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-6 w-6" aria-hidden="true" />{" "}
                          <span className="font-bold">Available</span>:{" "}
                          <time dateTime={property.timestamp}>
                            {property.available}
                          </time>
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
                            {property.bedrooms}
                          </span>{" "}
                          bedrooms
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
                            {property.bathrooms}
                          </span>{" "}
                          bathrooms
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>        
    )

}

export default Block