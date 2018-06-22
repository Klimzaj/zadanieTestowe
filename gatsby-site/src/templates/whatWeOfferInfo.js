import React, {Component} from 'react'
import PropTypes from 'prop-types'

class WhatWeOfferInfo extends Comment {
  render() {
      const {
        title
      } = this.props.data.contentfulWhatWeOfferContent
    return (
        <div> 
            <h1>{title}</h1>
        </div>
    )
  }
}
WhatWeOfferInfo.propTypes = {
    data: PropTypes.object.isRequired
}

export default WhatWeOfferInfo

export const pageQuery = graphql`
    query WhatWeOfferInfo($title: String!){
        contentfulWhatWeOfferContent(title: {eq: $title}){
            title
        }
    }
`