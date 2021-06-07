import React from 'react';
import { Spinner } from 'reactstrap';

class Loader extends React.Component {
    render () {
        return (
            <div className="Spin">
                <Spinner color="danger" />
            </div>
        );
    }
}

export default Loader;