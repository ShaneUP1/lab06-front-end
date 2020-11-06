import React, { Component } from 'react';
import { fetchFourteeners } from './utils.js';

export default class FetchPage extends Component {

    state = {
        fourteeners: [],
    }

    componentDidMount = async () => {
        const fourteeners = await fetchFourteeners();
        this.setState({ fourteeners })
    }

    render() {
        return (
            <div className='mtn-spread'>
                {this.state.fourteeners.map(mountain =>
                    <div className="mtn-card">
                        <h2>{mountain.name}</h2>
                        <p>Elevation: {mountain.elevation}</p>
                        <p>Mountain Range: {mountain.range_name}</p>
                        <p>Can you drive to the top: {mountain.drive_to_top.toString()}</p>
                        <p>ID: {mountain.id}</p>
                    </div>
                )}
            </div>
        )
    }
}
