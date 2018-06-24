/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const path = require("path");

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     const whatWeOfferInfoTemplate = path.resolve(`src/templates/whatWeOfferInfo.js`)
//     // Query for markdown nodes to use in creating pages.
//     resolve(
//       graphql(
//         `
//       {  
//         allContentfulWhatWeOfferContent(limit: 1000) {
//           edges {
//             node {
//                 title
//                 content {
//                     content
//                 }
//             }
//           }
//         }
//       }
//     `
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }

//         // Create blog post pages.
//         result.data.allContentfulWhatWeOfferContent.edges.forEach(edge => {
//             createPage({
//               path: edge.node.title, // required
//               component: whatWeOfferInfoTemplate,
//               context: {
//                   title: edge.node.title
//                 // Add optional context data. Data can be used as
//                 // arguments to the page GraphQL query.
//                 //
//                 // The page "path" is always available as a GraphQL
//                 // argument.
//               },
//             })
//         })

//         return
//       })
//     )
//   })
// }