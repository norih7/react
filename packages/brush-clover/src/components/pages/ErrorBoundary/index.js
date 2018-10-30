import React from "react";
import * as Sentry from "@sentry/browser";
Sentry.init({
    dsn: "https://567894280ac245f6b26219eddeef2ad8@sentry.io/1310571"
});

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
        });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>;
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}
