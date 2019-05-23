import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchPostList } from '../actions/postListAction' 

class TodoList extends Component {
    componentDidMount () {
        this.props.featchPostList('/todos');
    }

    renderPostList (post, index) {
        return (
            <div key={index} className="list">
                <div className="floatLeft">{post.title}</div>
                <div className="paddingLeft83">
                    <div className="floatLeft">
                        <button>Edit</button>
                    </div>
                    <div className="paddingLeft83">
                        <button>Delete</button>
                    </div>
                </div> 
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.props.postList.map(
                    (data, index) => {
                        return this.renderPostList(data, index)
                    }
                )} 
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        postList: state.postList
    }
}
export default connect(
    mapStateToProps, {
        featchPostList
    })(TodoList);