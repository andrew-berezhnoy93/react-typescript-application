import * as React from 'react';
import CommentsList from './comments/CommentsList';
// import toggleOpen from '../decorators/toggleOpen';
import ArticleType from '../types/Article';
import { findDOMNode } from 'react-dom';
// tslint:disable-next-line
class Article extends React.PureComponent<{article: ArticleType, isOpen?: boolean, toggleOpen?: any}, any> {

    state = {
        updateIndex: 0
    };

    // shouldComponentUpdate(nextProps: any, nextState: any) {
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    render() {
        const { article, isOpen, toggleOpen } = this.props;
        console.log('----', 'update article');
        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={toggleOpen(article.id)}> { !isOpen ? 'Open' : 'Close' } </button>
                {this.getBody()}
            </div>
        );
    }

    getBody = (): null | JSX.Element => {
        const { article, isOpen } = this.props;
        if (!isOpen) {
            return null;
        }
        return (
                <div>
                    <section>{ article.text } </section>
                    <button onClick={ () => this.setState({ updateIndex: this.state.updateIndex + 1 }) }>
                        update
                    </button>
                    <div>
                    <CommentsList 
                        comments={article.comments} 
                        ref={this.setCommentRef} 
                        key={this.state.updateIndex}
                    />
                    </div>
                </div>
           );
    }

    setCommentRef = (ref) => {
        return;
    }
    
}

export default Article;
// export default class Article extends Component {
//     constructor(props: Props) {
//         super(props)

//         this.state = {
//             isOpened: false
//         }
//     }

//     render() {
//         const { isOpened } = this.state
//         const {article} = this.props
//         return (
//             <div>
//                 <h2>{article.title}</h2>
//                 <button onClick={ this.toggleOpen }> { !isOpened ? 'Open' : 'Close' } </button>
//                 { this.getBody() }
//             </div>
//         )
//     }

//     getBody = () => {
//         if(!this.state.isOpened) {
//             return null;
//         }
//         const { article } = this.props;
//         return <section>{article.text}</section>
//     }

//     toggleOpen = () => {
//         this.setState({
//             isOpened: !this.state.isOpened
//         })
//     }
// }