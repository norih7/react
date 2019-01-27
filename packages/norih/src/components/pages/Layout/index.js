import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../../../contaienrs/Header";
import css from "./index.module.css";

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => {
            const { title, description } = data.site.siteMetadata;
            console.log(title, description);
            return (
                <>
                    <ErrorBoundary>
                        <Helmet
                            title={data.site.siteMetadata.title}
                            meta={[
                                { name: "description", content: "Sample" },
                                { name: "keywords", content: "sample, something" }
                            ]}
                        >
                            <html lang="ja" />
                        </Helmet>
                        <Header siteTitle={title} description={description} />
                        <div className={css["container"]}>{children}</div>
                    </ErrorBoundary>
                </>
            );
        }}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
