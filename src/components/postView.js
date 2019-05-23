import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchPost } from '../actions/postListAction';
import { Link } from "react-router-dom";

class PostViewComponent extends Component {
    componentDidMount () {
        const { id } = this.props.match.params;
        this.props.featchPost('/posts/' + id);
    }
    render () {
        const  { title, body } = this.props.postView;
        return (
            <div>
                <div>
                    <Link to="/">Back</Link>
                </div>
                <div>
                    <b>Title : </b>
                    { title }
                </div>
                <div>
                    <b>Body : </b>
                    { body }
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ postView }, ownProps) => {
    return { postView }
}
export default  connect(
    mapStateToProps, {
        featchPost
    })(PostViewComponent);