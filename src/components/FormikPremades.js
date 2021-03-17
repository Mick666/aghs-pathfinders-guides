import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Icon } from 'semantic-ui-react'
import Select from 'react-select'

export const FormikInput = ({ onSubmit, buttonText, uniqueValues, minimumLength = 5 }) => {
    return (
        <Formik
            initialValues={{ inputValue: '' }}
            validate={values => {
                const errors = {}
                if (!values.inputValue)
                    errors.inputValue = 'Required'
                else if (uniqueValues && uniqueValues.includes(values.inputValue))
                    errors.inputValue = 'Must be unique'
                else if (values.inputValue.length < minimumLength)
                    errors.inputValue = 'Must be at least five characters long'
                return errors
            }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values)
                resetForm()
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} style={{ margin: '25px 25px 25px 0' }}>
                    <input
                        type="inputValue"
                        name="inputValue"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.inputValue}
                        style={{ marginRight: '10px' }}
                    />
                    <span className='rightMarginSpacing errorMessage'>
                        {errors.inputValue && touched.inputValue && errors.inputValue}
                    </span>
                    <button type="submit" disabled={isSubmitting} className='leftMarginSpacing'>
                        {buttonText}
                    </button>
                </form>
            )}
        </Formik>
    )
}

export const FormikGameSearch = ({ onSubmitFunc, classProp }) => {
    return (
        <Formik
            initialValues={{ match: '' }}
            validate={values => {
                const errors = {}
                if (!values.match)
                    errors.match = 'Required'
                else if (values.match.length < 9)
                    errors.match = 'Match ID should be 10 characters'
                console.log(values.difficulty)
                if (!values.difficulty || values.difficulty.length === 0) errors.difficulty = 'Select a difficulty'
                return errors
            }}
            onSubmit={(values, { resetForm }) => {
                onSubmitFunc(values.difficulty, values.match)
                resetForm()
            }}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className={`gamesearch-formik ${errors.match || errors.difficulty ? 'error' : ''} ${classProp}`}>
                    <div className='flexColumn'>
                        <Field as="select" name="difficulty" placeholder='Difficulty'>
                            <option value="">Select difficulty</option>
                            <option value="4">Apex Mage</option>
                            <option value="3">Grand Magus</option>
                            <option value="2">Sorcerer</option>
                        </Field>
                        <span className='errorMessage'>
                            {errors.difficulty}
                        </span>
                    </div>
                    <div className='flexColumn'>
                        <div className='gamesearch-input-div'>
                            <input
                                type="match"
                                name="match"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.match}
                                style={{ marginRight: '10px' }}
                                placeholder='Match ID'
                            />
                            <button type="submit" disabled={isSubmitting}>
                                <Icon name='search' />
                            </button>
                        </div>
                        <span className='errorMessage'>
                            {errors.match}
                        </span>
                    </div>


                </form>
            )}
        </Formik>
    )
}

export const FormikTextField = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ inputValue: '' }}
            validate={values => {
                const errors = {}
                if (!values.inputValue)
                    errors.inputValue = 'Required'
                else if (values.inputValue.length < 5)
                    errors.inputValue = 'Must be at least five characters long'
                return errors
            }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values)
                resetForm()
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
            }) => (
                <Form>
                    <Field
                        className='formikTextField'
                        type="inputValue"
                        name="inputValue"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.inputValue}
                        as='textarea'
                    >
                    </Field>
                    {errors.inputValue && touched.inputValue && errors.inputValue}
                </Form>
            )}
        </Formik>
    )
}