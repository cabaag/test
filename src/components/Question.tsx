import { TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { FormikFormProps, FieldInputProps } from 'formik';

type QuestionProps = {
  question: {
    title: string;
    name: string;
    validations?: string[];
    type: string;
    id: number;
    props?: any;
    options?:
      | {
          label: string;
          value: string;
        }[]
      | undefined;
  };
  field: FieldInputProps<any>;
  error: any;
};

const Question: FunctionComponent<QuestionProps> = ({ question, field, error }) => {
  let component = null;
  switch (question.type) {
    case 'select':
      component = (
        <FormControl fullWidth>
          <InputLabel>{question.title}</InputLabel>
          <Select displayEmpty {...field}>
            {question.options &&
              question.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      );
      break;
    case 'text':
    case 'number':
    default:
      component = (
        <TextField
          error={error}
          label={question.title}
          name={question.name}
          type={question.type}
          fullWidth
          inputProps={{ ...question.props }}
          helperText={error ? 'Incorrect entry' : ''}
          {...field}
        />
      );
  }
  return component;
};

export default Question;
