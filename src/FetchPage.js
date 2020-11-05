import React, { Component } from 'react'
import fetch from 'superagent';

export default class FetchPage extends Component {

    state = {
        data: [],
    }

    componentDidMount = async () => {
        await this.fetchData();
    }

    fetchData = async () => {
        const data = await fetch.get('https://stark-escarpment-62671.herokuapp.com/fourteeners')
        this.setState({ data: data.body })
    }

    render() {
        return (
            <div className='mtn-spread'>
                {this.state.data.map(mountain =>
                    <div className="mtn-card">
                        <h2>{mountain.name}</h2>
                        <p>Elevation: {mountain.elevation}</p>
                        <p>Mountain Range: {mountain.range_name}</p>
                        <p>Can you drive to the top: {mountain.drive_to_top.toString()}</p>
                        <p>{mountain.owner_id}</p>
                    </div>
                )}
            </div>
        )
    }
}
