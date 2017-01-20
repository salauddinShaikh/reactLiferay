// import React from 'react';

class MyTimesheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timesheet: {
            }
        };
    }

    render() {
        var context = this;
        return (
            <div className="portlet light">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-settings font-red"></i>
                        <span className="caption-subject font-red sbold uppercase">Timesheet</span>
                    </div>
                </div>
                <div className="portlet-body">
                    <h3> This is timesheet view </h3>
                    <div>
                        <button type="button" className="btn default" onClick={ this.props.onBackClick }>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyTimesheet