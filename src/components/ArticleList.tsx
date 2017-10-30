import * as React from 'react';
import Article from './Article';
import ArticleType from '../types/Article';
import accordeon from '../decorators/accordeon';
// tslint:disable
interface Articles {
    articles: ArticleType[]
}
// tslint: enable
class ArticleList extends React.Component<any> {
    state = {
        openArticleId: null
    }
    render() {
        const { openedId, toggleOpen } = this.props;
        const articleElements = this.props.articles.map(article => <li key={article.id}>
        <Article 
            article={article}
            toggleOpen = {toggleOpen}
            isOpen = {article.id === openedId}
        />
        </li>)

        return (
                <ul>
                    { articleElements }
                </ul>
            );
    }

    toggleOpenArticle = openArticleId => ev => {
        if(openArticleId === this.state.openArticleId) {
            this.setState ({
                openArticleId: null
            })
            return;
        }
        this.setState({ openArticleId })
    }
    
};

export default accordeon(ArticleList);
