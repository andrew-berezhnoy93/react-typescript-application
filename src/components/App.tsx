import * as React from 'react';
import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <ArticleList articles={ this.props.articles } />
                <ArticlesChart articles={ this.props.articles } />
            </div>
        );
    }
}

export default App;