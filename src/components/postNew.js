import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createPost } from '../actions/postListAction' 

class PostNewComponent extends Component {
    renderInput (field) {
        return (
            <div>
                <label>{field.label}</label>
                <input 
                type={field.type}
                {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit (e) {
        const values = JSON.stringify({
            title: e.title,
            body: e.description,
            userId: 1
        });
        this.props.createPost('/posts' ,values, (res) => {
            // console.log(res);
            this.props.history.push('/');
        })
    }

    render () {
        const { handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div>
                        <Field 
                            type="text"
                            label="Title"
                            name="title"
                            component={this.renderInput}
                        />
                    </div>
                    <div>
                        <Field 
                            type="text"
                            label="Tag"
                            name="tag"
                            component={this.renderInput}
                        />
                    </div>
                    <div>
                        <Field 
                            type="textarea"
                            label="Description"
                            name="description"
                            component={this.renderInput}
                        />
                    </div>
                    <div>
                        <button type="submit"  disabled={pristine || submitting}>Submit</button>
                        <span className="paddingLeft20">
                            <button type="button" disabled={pristine || submitting} onClick={reset}>
                                Clear
                            </button>
                        </span>
                        <Link  className="paddingLeft20" to="/" > Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
};
const validate = (values) => {
    const error = {};
    if (!values.title) {
        error.title = "Please enter title";
    }
    if (!values.tag) {
        error.tag = "Please enter tag";
    }
    if (!values.description) {
        error.description = "Please enter description";
    }
    return error;
}
export default reduxForm ({
    validate,
    form: 'Create New Post'
})(
    connect(
        null, {
            createPost
        }) (PostNewComponent)
);