import * as React from 'react';

export default (OriginalComponent: any): any => class WrappedComponent extends React.Component<any> {

    state = {
        openArticleId: null
    };

    render() {
        return (
        <OriginalComponent 
                {...this.props} 
                openedId={this.state.openArticleId} 
                toggleOpen={this.toggleOpenArticle}
        />
        );
    }

    toggleOpenArticle = openArticleId => ev => {
            this.setState ({
                openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
            });
    }
};