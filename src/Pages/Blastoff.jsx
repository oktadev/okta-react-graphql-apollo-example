import React, { Component } from 'react';

import Header from '../Components/Header'
import { Container } from 'react-bootstrap'

import Histories from '../Components/Histories';
import History from '../Components/History';

class Blastoff extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false,
            showHistory: false,
            shownHistoryId: -1
        }

        this.onHistorySelected = this.onHistorySelected.bind(this);
        this.onReturnToHistories = this.onReturnToHistories.bind(this);
    }

    onHistorySelected (id) {
        this.setState({
            showHistory: true,
            shownHistoryId: id
        });
    }

    onReturnToHistories () {
        this.setState({
            showHistory: false,
            shownHistoryId: -1
        });
    }

    render () {

        if (this.state.loading) {
            return <Container>
                <Header></Header>
                <h4>Loading, please wait.</h4>
            </Container>
        }

        if (this.state.showHistory) {
            return (
                <Container>
                    <Header></Header>
                    <History id={this.state.shownHistoryId} onReturnToHistories={this.onReturnToHistories}></History>
                </Container >
            )
        }

        return (
            <Container>
                <Header></Header>
                <Histories onHistorySelected={this.onHistorySelected}></Histories>
            </Container >
        );
    }
}

export default Blastoff;
