import * as React from 'react';
import Comment from './Comment';
import toggleOpen from '../../decorators/toggleOpen';
// tslint:disable-next-line
class CommentsList extends React.Component<any, any> {
    static defaultProps = {
        comments: []
    };
    // state = {
    //     isOpen: false
    // };

    render(): JSX.Element {
        const { isOpen, toggle } = this.props;

        return (
            <div>
                <button onClick={ toggle }>{ !isOpen ? 'open comments' : 'close comments' }</button>
                {this.giveList()}
            </div>
        );
    } 

    private giveList = (): null | JSX.Element => {
        const { comments, isOpen } = this.props;
        if (!isOpen) {
            return null;
        }
        if (!comments.length) {
            return <p>No comments yet</p>;
        }
        const commentElements = comments
        .map((comment: any) => <li key={ comment.id }> <Comment comment={ comment }/> </li>);
        return <ul> { commentElements } </ul>;
    }

    // private toggleShow = (): void => {
    //     console.log(this.state);
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
}

export default toggleOpen(CommentsList);