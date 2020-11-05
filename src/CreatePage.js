import React, { Component } from 'react'
import request from 'superagent';

const userFromWherever = {
    userId: 1
};

export default class CreatePage extends Component {

    state = {
        mtn_ranges: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://stark-escarpment-62671.herokuapp.com/mtn_ranges');

        this.setState({ mtn_ranges: response.body });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newFourteener = {
            name: this.state.name,
            elevation: this.state.elevation,
            mtn_range_id: this.state.rangeId,
            drive_to_top: this.state.drive_to_top,
            owner_id: userFromWherever.userId
        }

        await request
            .post('https://stark-escarpment-62671.herokuapp.com/fourteeners')
            .send(newFourteener);

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({
            rangeId: e.target.value,
            drive_to_top: e.target.value
        })
    }



    render() {

        // console.log(this.state.name, this.state.elevation, this.state.rangeId, this.state.drive_to_top, userFromWherever.userId)
        // console.log(this.state.drive_to_top)
        return (
            <div>
                Enter a new fourteener
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Fourteener Name
                        <input onChange={e => this.setState({ name: e.target.value })} />
                    </label>
                    <label>
                        Elevation
                        <input onChange={e => this.setState({ elevation: e.target.value })} type='number' />
                    </label>
                    <label>
                        Mountain Range
                        <select onChange={this.handleChange} >
                            <option></option>
                            {
                                this.state.mtn_ranges.map(range => <option key={range.id} value={range.id}>
                                    {range.name}
                                </option>)
                            }
                        </select>
                    </label>
                    <label>
                        Can Drive to the Top?
                        <select onChange={e => this.setState({ drive_to_top: e.target.value })}>
                            <option value=''></option>
                            <option value='true'>Yes</option>
                            <option value='false'>Nope</option>
                        </select>
                    </label>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
