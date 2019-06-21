import React from 'react';
import { Send } from '../api/TouitAPI';
class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            message: null
        }
    }
    handleChangename = e => {
        this.setState({ name: e.target.value })
    }

    handleChangemessage = e => {
        this.setState({ message: e.target.value })

    }

    handleSubmit = e => {
        const data1 = this.state.name;
        const data2 = this.state.message

        e.preventDefault()

        Send(data1, data2);

    }
    render() {
        return (
            <form>
                <div className="row mr-0 pt-3 py-3 bg-light pl-3">
                    <div className="col-4">
                        <input type="text" className="form-control pl-3" placeholder="Name" onChange={this.handleChangename} />
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Message" onChange={this.handleChangemessage} />
                    </div>
                    <div className="col-1 pt-1">
                        <button onClick={this.handleSubmit} className="btn-primary">publier</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default SendMessage;