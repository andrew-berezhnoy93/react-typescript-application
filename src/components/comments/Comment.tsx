import * as React from 'react';
// tslint:disable-next-line

interface Comment {
    comment: {
        user: string;
        text: string;
        id: string;
    };
}

const Comment: React.StatelessComponent<Comment> = ({ comment }) => {
    return (
        <div>
        <h3>{ comment.user }</h3>,
        <strong>{ comment.text }</strong>
        </div>
    );
};

export default Comment;