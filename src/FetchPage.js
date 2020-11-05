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
            <div>
                {this.state.data.map(mountain =>
                    <div className="mtnInfo">
                        <h2>{mountain.name}</h2>
                        <p>{mountain.elevation}</p>
                        <p>{mountain.range_name}</p>
                        <p>{mountain.drive_to_top.toString()}</p>
                        <p>{mountain.owner_id}</p>
                    </div>
                )}
            </div>
        )
    }
}
