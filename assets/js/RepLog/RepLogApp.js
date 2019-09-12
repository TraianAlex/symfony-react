import React, { Component } from 'react';
import RepLogs from './RepLogs';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { getRepLogs, deleteRepLog, createRepLog } from '../api/rep_log_api';

export default class RepLogApp extends Component {
    constructor(props) {
        super(props);

        // getRepLogs()
        //     .then((data) => {
        //         console.log(data);
        //     });

        this.state = {
            highlightedRowId: null,
            // repLogs: [
            //     { id: uuid(), reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5 },
            //     { id: uuid(), reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180 },
            //     { id: uuid(), reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72 }
            // ],
            repLogs: [],
            numberOfHearts: 1,
            isLoaded: false,
        };

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddRepLog = this.handleAddRepLog.bind(this);
        this.handleHeartChange = this.handleHeartChange.bind(this);
        this.handleDeleteRepLog = this.handleDeleteRepLog.bind(this);
    }

    componentDidMount() {
        getRepLogs()
            .then((data) => {
                this.setState({
                    repLogs: data,
                    isLoaded: true
                })
            });
    }

    handleRowClick(repLogId) {
        this.setState({highlightedRowId: repLogId});
    }

    handleAddRepLog(item, reps) {
        //const repLogs = this.state.repLogs;
        const newRep = {
            //id: uuid(),
            reps: reps,
            item: item,
            //totalWeightLifted: Math.floor(Math.random() * 50)
        };
        createRepLog(newRep)
            .then(repLog => {
                this.setState(prevState => {
                    const newRepLogs = [...prevState.repLogs, repLog];
                    return {repLogs: newRepLogs};
                });
            })
        ;
        //repLogs.push(newRep);
        //const newRepLogs = [...this.state.repLogs, newRep];
        //this.setState({repLogs: repLogs});
        //this.setState({repLogs: newRepLogs});
        // this.setState(prevState => {
        //     //const newRepLogs = [...prevState.repLogs, newRep];
        //     const newRepLogs = this.state.repLogs.slice(0).concat(newRep);
        //     return {repLogs: newRepLogs};
        // });
    }

    handleHeartChange(heartCount) {
        this.setState({
            numberOfHearts: heartCount
        });
    }

    handleDeleteRepLog(id) {
        deleteRepLog(id);
        // remove the rep log without mutating state
        // filter returns a new array
        // this.setState({
        //     repLogs: this.state.repLogs.filter(repLog => repLog.id !== id)}
        // );
        this.setState((prevState) => {
            return {
                repLogs: prevState.repLogs.filter(repLog => repLog.id !== id)
            };
        });
    }

    render() {
        // const { highlightedRowId, repLogs } = this.state;
        // const { withHeart } = this.props;

        return (
            <RepLogs
                // withHeart={withHeart}
                // highlightedRowId={highlightedRowId}
                // repLogs={repLogs}
                {...this.props}
                {...this.state}
                onRowClick={this.handleRowClick}
                onAddRepLog={this.handleAddRepLog}
                onHeartChange={this.handleHeartChange}
                onDeleteRepLog={this.handleDeleteRepLog}
            />
        )
    }
}

RepLogApp.propTypes = {
    withHeart: PropTypes.bool,
};