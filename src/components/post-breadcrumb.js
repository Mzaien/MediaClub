import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import PropTypes from "prop-types"

const PostBreadcrumb = ({ breadcrumbLinks }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { title },
    },
  } = data

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" color="teal.400">
          {title}
        </BreadcrumbLink>
      </BreadcrumbItem>

      {breadcrumbLinks.map((link, index) => {
        const { name, dest } = link
        const isLast = index === breadcrumbLinks.length - 1

        return (
          <BreadcrumbItem key={name + index} isCurrentPage={isLast}>
            {isLast ? (
              <BreadcrumbLink href="#">{name}</BreadcrumbLink>
            ) : (
              <BreadcrumbLink as={Link} to={dest} color="teal.400">
                {name}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

PostBreadcrumb.propTypes = {
  breadcrumbLinks: PropTypes.array.isRequired,
}

export default PostBreadcrumb
