import React, { useEffect, useRef, useState } from "react"
import { graphql, PageProps } from "gatsby"
import { Link } from "gatsby"

import { ArrowRight } from "react-feather"
import { GitHub } from "react-feather"
import { Slack } from "react-feather"

import Layout from "../components/layout"
import { Button } from "../components/ui"

import ItemBlog from "../components/item-blog"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"

export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata

    const blogList = data.blog.edges.map(item => (
        <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
    ))

    return (
        <Layout
            front={true}
            seo={{
                title: "Home",
                description: siteData.description,
            }}
            navPlaceholder={false}
            location={location}
        >
            <Wall data={siteData} />
            <About  />
            <Blog>{blogList}</Blog>
        </Layout>
    )
}

const About = ({ }) => {
    let spanAttrs: Partial<{ style: unknown }> = {}

    spanAttrs.style = {
        margin: '0 auto',
    }

    return (
        <div className="boxed">
            <div className="px-4 py-12 text-center lg:py-14 lg:px-0">
                {/* <h2 className="text-color-1 text-3xl lg:text-4xl">
                    Overview
                </h2> */}
                <p className="mt-5 text-lg py-3">
                    Marquez is an open source metadata service for the <strong>collection</strong>, <strong>aggregation</strong>, and <strong>visualization</strong> of a data ecosystem's metadata. It maintains the <a href="https://en.wikipedia.org/wiki/Provenance#Data_provenance">provenance</a> of how datasets are consumed and produced, provides global visibility into job runtime and frequency of dataset access, centralization of dataset lifecycle management, and much more. Marquez was released and open sourced by <a href="https://www.wework.com">WeWork</a>.
                </p>
                <span className="py-5">
                    <Button
                        title="GitHub"
                        to='https://github.com/OpenLineage/OpenLineage'
                        type="extbutton"
                        iconRight={<GitHub />}
                        className="mx-5 rounded-full"
                    />
                    <Button
                        title="Quickstart"
                        to='/quickstart'
                        type="link"
                        iconRight={<ArrowRight />}
                        className="mx-5 rounded-full"
                    />
                    <Button
                        title="Slack"
                        to='http://bit.ly/OpenLineageSlack'
                        type="extbutton"
                        iconRight={<Slack />}
                        className="mx-5 rounded-full"
                    />
                </span>
            </div>
        </div>
    )
}

const Wall = ({ data }) => {
    const wall = useRef(null)

    const twoColumnWall = data.twoColumnWall

    const [state, changeState] = useState({
        loaded: false,
        supportsBlend: false,
    })

    useEffect(() => {
        if (window.CSS && !state.loaded) {
            if (CSS.supports("mix-blend-mode", "screen")) {
                wall.current.classList.add("supports-blend")
                changeState({
                    loaded: true,
                    supportsBlend: true,
                })
            }
        }
    }, [state.loaded])

    let spanAttrs: Partial<{ style: unknown }> = {}

    if (!twoColumnWall && data.titleImage) {
        spanAttrs.style = {
            backgroundImage: `url('${data.titleImage}')`,
            height: '35em',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
    }

    const innerComponents = (
        <React.Fragment>
            <div className="title">
                <h1
                    className={`text-6xl relative mt-20 lg:text-7xl ${
                        data.capitalizeTitleOnHome ? "uppercase" : ""
                    }`}
                >
                    <span>Meet Marquez</span>
                </h1>
            </div>
            <p className="text-lg lg:text-xl text-color-3 pt-9 pb-24">
                {data.introTag}
            </p>
        </React.Fragment>
    )

    if (twoColumnWall) {
        return (
            <div
                className="wall flex relative justify-center items-center overflow-hidden pt-24 pb-16"
                ref={wall}
            >
                <div className="flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0">
                    <div className="w-full h-full">
                        <img
                            src="/images/screenshot.svg"
                            alt=""
                            className="h-full w-auto max-w-none lg:h-auto lg:w-full px-12"
                        />
                    </div>
                    <img
                        src={data.titleImage}
                        alt=""
                        className="h-full w-auto max-w-none lg:h-auto lg:w-full"
                    />
                </div>
                <div className="flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default">
                    {innerComponents}
                </div>
            </div>
        )
    }

    return (
        <div
            className="wall flex flex-col justify-center items-center text-center"
            {...spanAttrs}
            ref={wall}
        >
            {innerComponents}
        </div>
    )
}

const Blog = ({ children }) => {
    return (
        <div className="container mx-auto px-0 pb-40">
            <div className="px-4 py-12 text-center lg:py-14 lg:px-0">
                <h2 className="text-color-1 text-3xl lg:text-4xl">
                    Latest News
                </h2>
            </div>
            <div className="flex flex-wrap">{children}</div>
        </div>
    )
}

export const query = graphql`
    query IndexPageQuery {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
                titleImage
                ogImage
                twoColumnWall
                introTag
                description
            }
        }
        integration: allMdx(
            filter: { fields: { sourceName: { eq: "integration" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        author
                        date(formatString: "DD MMMM YYYY")
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
