import * as React from 'react';

class ArticlesChart extends React.Component<any, any> {

    componentDidMount() {
        // d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps: any) {
        // update chart for new articles
    }

    render() {
        return <div ref="chart" />;
    }

    componentWillUnmount() {
        // do some cleanup
    }
}

export default ArticlesChart;