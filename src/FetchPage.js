import React, { Component } from 'react';
import { fetchFourteeners } from './utils.js';
import { Link } from 'react-router-dom';

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
            <>

                <span>Click on any fourteener to edit or delete.</span>
                <div className='mtn-spread'>
                    {this.state.fourteeners.map(mountain =>
                        <Link to={`/update/${mountain.id}`}>
                            <div className="mtn-card">
                                <h2>{mountain.name}</h2>
                                <p>Elevation: {mountain.elevation}</p>
                                <p>Mountain Range: {mountain.range_name}</p>
                                <p>Can you drive to the top: {mountain.drive_to_top.toString()}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </>
        )
    }
}
