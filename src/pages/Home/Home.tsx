import { Button, Divider, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import Question from '../../components/Question';
import { hideLoader, showLoader } from '../../store/actions/loader.actions';
import questions from './questions.json';

type HomeProps = {
  showLoader: () => void;
  hideLoader: () => void;
};

const Home = (props: HomeProps) => {
  function handleSubmit(values: any) {
    console.log(values);
    props.showLoader();
    axios
      .post('https://reqres.in/api/users', values)
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
      .finally(() => {
        props.hideLoader();
      });
  }

  function validateField(value: string, validations?: string[]) {
    let errorTmp;
    if (validations) {
      errorTmp = validations.some((validation) => !new RegExp(validation).test(value));
    }
    return errorTmp;
  }

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h3"> Survey</Typography>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Formik initialValues={{ name: '', age: '', country: '' }} onSubmit={handleSubmit}>
          <Form>
            <Grid container direction="column" spacing={3}>
              {questions.map((question) => (
                <Grid item key={question.id}>
                  <Field name={question.name} validate={(value: string) => validateField(value, question.validations)}>
                    {({ field, meta }: FieldProps) => <Question question={question} field={field} error={meta.error} />}
                  </Field>
                </Grid>
              ))}
              <Grid item container justify="flex-end">
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader()),
});

export default connect(null, mapDispatchToProps)(Home);
