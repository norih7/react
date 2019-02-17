import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/pages/Layout";

const css = {
    post: {}
};
const IndexPage = props => {
    const postList = props.data.allMarkdownRemark;
    return (
        <Layout contentName="blog">
            {postList.edges.map(({ node }, i) => (
                <div style={css["post"]}>
                    <Link to={node.frontmatter.path} className="link">
                        <h1>{node.frontmatter.title}</h1>
                    </Link>
                    <span>{node.frontmatter.date}</span>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </Layout>
    );
};
export default IndexPage;
export const listQuery = graphql`
    query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "MMMM Do YYYY")
                        title
                        path
                    }
                }
            }
        }
    }
`;