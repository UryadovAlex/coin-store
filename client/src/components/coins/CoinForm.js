import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './styles/CoinForm.module.css';
import history from "../../history";

class UserForm extends React.Component {
    state = {
        file1: '',
        imagePreviewUrl1: '',
        file2: '',
        imagePreviewUrl2: '',
    };

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <input type="text" {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderSelect = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <select {...input}>
                    <option value="exclusive">Exclusive</option>
                    <option value="invested">Invested</option>
                    <option value="memorial">Memorial</option>
                </select>
                {this.renderError(meta)}
            </div>
        );
    }

    renderTextarea = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={styles.form_filed}>
                <label>{label}</label>
                <textarea {...input} rows="5" cols="50"/>
                {this.renderError(meta)}
            </div>
        );
    }

    renderFileInput1 = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        delete input.value;
        return (
            <div className={styles.form_filed}>
                <label>{label} :</label>
                <input type="file" {...input} onChange={(e) => this._handleImageChange1(e)}/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderFileInput2 = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        delete input.value;
        return (
            <div className={styles.form_filed}>
                <label>{label} :</label>
                <input type="file" {...input} onChange={(e) => this._handleImageChange2(e)}/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    _handleImageChange1(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file1: file,
                imagePreviewUrl1: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    _handleImageChange2(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file2: file,
                imagePreviewUrl2: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl1, imagePreviewUrl2} = this.state;
        let $imagePreview1 = null;
        let $imagePreview2 = null;
        if (imagePreviewUrl1) {
            $imagePreview1 = (<img style={{width: "100px", height: "100px"}} src={imagePreviewUrl1}/>);
        }
        if (imagePreviewUrl2) {
            $imagePreview2 = (<img style={{width: "100px", height: "100px"}} src={imagePreviewUrl2}/>);
        }
        return (
            <div>
                <form className={styles.coin_form} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className={styles.columns}>
                        <Field
                            name="name"
                            component={this.renderInput}
                            label="Name"
                        />
                        <Field
                            name="value"
                            component={this.renderInput}
                            label="Value"
                        />
                        <Field
                            name="year"
                            component={this.renderInput}
                            label="Year"
                        />
                        <Field
                            name="price"
                            component={this.renderInput}
                            label="Price"
                        />
                        <Field
                            name="country"
                            component={this.renderInput}
                            label="Country"
                        />
                        <Field
                            name="metal"
                            component={this.renderInput}
                            label="Metal"
                        />
                    </div>
                    <div className={styles.columns}>
                        <Field
                            name="fullDescription"
                            component={this.renderTextarea}
                            label="Full description"
                        />
                        <Field
                            name="shortDescription"
                            component={this.renderTextarea}
                            label="Short description"
                        />
                        <Field
                            name="quality"
                            component={this.renderInput}
                            label="Quality"
                        />
                        <Field
                            name="weight"
                            component={this.renderInput}
                            label="Weight"
                        />
                    </div>
                    <div className={styles.columns}>
                        <Field
                            name="coinType"
                            component={this.renderSelect}
                            label="Coin type"
                        />
                        <div className={styles.preview}>
                            {$imagePreview1}
                        </div>
                        <Field
                            name="obverseLink"
                            component={this.renderFileInput1}
                            label="Upload obverse"
                        />
                        <div className={styles.preview}>
                            {$imagePreview2}
                        </div>
                        <Field
                            name="reverseLink"
                            component={this.renderFileInput2}
                            label="Upload reverse"
                        />
                        <button className={styles.button}>Submit</button>
                        <button className={styles.button} onClick={(e) => {
                            e.preventDefault();
                            history.goBack()
                        }}>Cancel</button>
                    </div>
                </form>

            </div>
        );
    }
}

const validate = ({
                      name,
                      value,
                      year,
                      price,
                      country,
                      metal,
                      fullDescription,
                      shortDescription,
                      quality,
                      weight,
                  }) => {
    const errors = {};

    if (!name) {
        errors.name = 'You must enter a name';
    }

    if (!value) {
        errors.value = 'You must enter a value';
    }

    if (!year) {
        errors.year = 'You must enter a year';
    }

    if (!price) {
        errors.price = 'You must enter a price';
    }

    if (!country) {
        errors.country = 'You must enter a country';
    }

    if (!metal) {
        errors.metal = 'You must enter a metal';
    }

    if (!fullDescription) {
        errors.fullDescription = 'You must enter a description';
    }

    if (!shortDescription) {
        errors.shortDescription = 'You must enter a description';
    }

    if (!quality) {
        errors.quality = 'You must enter a quality';
    }

    if (!weight) {
        errors.weight = 'You must enter a weight';
    }

    return errors;
};

export default reduxForm({
    form: 'coinForm',
    validate
})(UserForm);