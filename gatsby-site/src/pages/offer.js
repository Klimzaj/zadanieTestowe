import React from 'react'
import Link from 'gatsby-link'
import Offer from '../components/offer';
import Hero from '../components/hero';

const OfferPage = ({data}) => {
  // console.log(data.allContentfulMenu.edges[0].node)
  
  return (
  <div>
    <Hero offers = {data.allContentfulHeroContent.edges} infos = {data.allContentfulHeroInfo.edges[0].node} manuInfo = {data.allContentfulMenu.edges[0].node}/>
    <Offer offers = {data.allContentfulWhatWeOfferContent.edges} infos={data.allContentfulWhatWeOferInfo.edges[0].node}/>
  </div>
)}

export default OfferPage

export const pageQuery = graphql`
query offerQuery
{
  allContentfulHeroContent {
    edges {
      node {
        title
        content {
          content
        }
        readMoreImg{
          file{
            url
            details{
              image {
                width
                height
              }
            }
          }
        }
        img{
          file{
            url
            details{
              image {
                width
                height
              }
            }
          }
        }
        
      }
    }
  }
  allContentfulWhatWeOfferContent {
    edges {
      node {
        title
        content {
          content
        }
        img {
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }  
  allContentfulWhatWeOferInfo {
    edges {
      node {
        title
        secondaryTitle
        img {
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
  allContentfulHeroInfo {
    edges {
      node {
        mainTitle1
        mainTitle2
        mainTitle3
        buttonImg{
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
        img {
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }

        }
      }
    }
  }
  allContentfulMenu {
    edges {
      node {
        link1
        link2
        link3
        link4
        link5
        link6
        serchImg{
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
        logoImg {
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
}`