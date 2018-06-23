import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
