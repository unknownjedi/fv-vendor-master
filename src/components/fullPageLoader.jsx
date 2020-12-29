import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoaderGif from '../assets/images/loader.gif'

class FullPageLoader extends Component {
    state = {  }


    render() { 
        const {loading} = this.props;

        if(!loading) return null;

        return ( 
            <div className="loader-container">
                <div className="loader">
                    <img src={LoaderGif} />
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    const { loading } = state;
    return { loading };
  };

export default connect(mapStateToProps)(FullPageLoader);