import * as React from 'react';

export default (OriginalComponent: any): any => class WrappedComponent extends React.Component<any> {

    state = {
        isOpen: false
    };

    componentDidMount() {
        console.log('mounting');
    }

    componentDidUpdate() {
        console.log('updating');
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggle={this.toggleOpen}/>;
    }

    toggleOpen = (ev): void => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
};