import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from "./styles/UserLogin.module.css"
import history from "../../history";

class UserForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className={styles.error}>
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInputText = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <input type="text" {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderInputPassword = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <input type="password" {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderSelect = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <select {...input} value="m">
                    <option value="m">Select gender</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                {this.renderError(meta)}
            </div>
        );
    }

    renderSelectAdmin = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <select {...input}>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
                <div className={styles.error}>
                    {this.renderError(meta)}
                </div>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
        console.log(formValues)
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="firstName"
                    component={this.renderInputText}
                    label="First name"
                />
                <Field
                    name="lastName"
                    component={this.renderInputText}
                    label="Last name"
                />
                <Field
                    name="gender"
                    component={this.renderSelect}
                    label="Gender"
                />
                <Field
                    name="email"
                    component={this.renderInputText}
                    label="Email"
                />
                {+this.props.isAdmin ? <Field
                    name="isAdmin"
                    component={this.renderSelectAdmin}
                    label="Admin"
                /> : ''} <Field
                name="password"
                component={this.renderInputPassword}
                label="Password"
            />
                <Field
                    name="password_compare"
                    component={this.renderInputPassword}
                    label="Enter password again"
                />
                <div className={styles.buttons}>
                    <button className={styles.button}>Submit</button>
                    <button className={styles.button} onClick={(e) => {
                        e.preventDefault();
                        history.goBack()
                    }}>Cancel
                    </button>
                </div>
            </form>
        );
    }
}

const validate = ({name, email, password, password_compare}) => {
    const errors = {};

    if (!name) {
        errors.name = 'You must enter a name';
    }

    if (!email) {
        errors.email = 'You must enter a email';
    }

    if (!password) {
        errors.password = 'You must enter a password';
    }

    if (password !== password_compare) {
        errors.password = 'Passwords does not match';
    }

    return errors;
};

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);
