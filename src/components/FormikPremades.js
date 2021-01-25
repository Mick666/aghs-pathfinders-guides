import React from 'react'
import { Formik, Field, Form } from 'formik'

export const FormikInput = ({ onSubmit, buttonText, uniqueValues }) => {
    console.log(uniqueValues)
    return (
        <Formik
            initialValues={{ inputValue: '' }}
            validate={values => {
                const errors = {}
                if (!values.inputValue)
                    errors.inputValue = 'Required'
                else if (uniqueValues && uniqueValues.includes(values.inputValue))
                    errors.inputValue = 'Must be unique'
                else if (values.inputValue.length < 3)
                    errors.inputValue = 'Must be at least three characters long'
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

export const FormikTextField = ({ onSubmit, buttonText }) => {
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
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit}>
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