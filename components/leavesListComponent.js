import React from 'react';

class LeavesListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        var rec = [
            {
                id: 1,
                start: '29/12/2016',
                end: '01/01/2017',
                reason: 'Not well',
                status: 'Approved'
            }, {
                id: 2,
                start: '29/10/2016',
                end: '01/11/2016',
                reason: 'Not well',
                status: 'Approved'
            }, {
                id: 3,
                start: '12/09/2016',
                end: '12/09/2017',
                reason: 'Going home',
                status: 'Partially Approved'
            }, {
                id: 4,
                start: '12/01/2017',
                end: '13/01/2017',
                reason: 'Going home',
                status: 'Pending'
            }
        ];
        var context = this;
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-settings font-red"></i>
                        <span className="caption-subject font-red sbold uppercase">Leaves</span>
                    </div>
                    <div className="actions">
                        <div className="btn-group pull-right">
                            <button onClick={ this.props.onAddClick } type="button" className="btn green btn-sm btn-outline" aria-expanded="false">
                                <i className="fa fa-plus"></i>Apply Leave
                            </button>
                        </div>
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="table-scrollable">
                        <table className="table table-hover table-light">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> Reason </th>
                                    <th> Start Date </th>
                                    <th> End Date </th>
                                    <th> Status </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rec.map((row, index) => {
                                        return (
                                            <tr key={row.id}>
                                                <td> {index + 1} </td>
                                                <td> <a onClick={ this.props.onRecordClick.bind(null,row.id) } > {row.reason}</a> </td>
                                                <td> {row.start} </td>
                                                <td> {row.end} </td>
                                                <td>
                                                    { this.statusLabel(row.status) }
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    statusLabel(status) {
        switch (status) {
            case 'Approved':
                return (
                    <span className="label label-sm label-success"> Approved </span>
                );

            case 'Partially Approved':
                return (
                    <span className="label label-sm label-info"> Partially Approved </span>
                );

            default:
                return (
                    <span className="label label-sm label-warning"> Pending </span>
                );
        }
    }
}

export default (LeavesListComponent)