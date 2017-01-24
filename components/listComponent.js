// import React from 'react';

import moment from 'moment';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cancelledLeaves: [],
            modifiedLeaves: []
        }
    }

    componentDidMount() {
        this.cancelledLeavesAPI();
        this.modifiedLeavesAPI();
    }

    /**
     * cancelledLeaves API Call
     */
    cancelledLeavesAPI() {
        var context = this;
        Liferay.Service(
            '/eternus.leave/getCancelledLeaves',
            {
                managerId: 123
            },
            function (obj) {
                console.log(obj);
                context.setState({ cancelledLeaves: obj });
            }
        );
    }

    /**
     * modifiedLeaves API Call
     */
    modifiedLeavesAPI() {
        var context = this;
        Liferay.Service(
            '/eternus.leave/getModifiedLeaves',
            {
                managerId: 123
            },
            function (obj) {
                console.log(obj);
                context.setState({ modifiedLeaves: obj });
            }
        );
    }

    render() {
        var context = this;

        return (
            <div className="portlet bordered">
                <div className="portlet-body">
                    <div className="note note-info note-bordered">
                        <p>Leaves <strong> CANCELLED </strong></p>
                        <ul>
                            {
                                context.state.cancelledLeaves.map((row, index) => {
                                    return (
                                        <li key={index}>{row.Name} on {row.StartDate} </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="note note-warning note-bordered">
                        <p>Leaves <strong> MODIFIED </strong></p>
                        <ul>
                            {
                                context.state.modifiedLeaves.map((row, index) => {
                                    return (
                                        <li key={index}><a onClick={ this.props.onRecordClick.bind(null, row.LeaveId) }>{row.Name}</a> on {row.StartDate} </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default (ListComponent);
