// @flow

import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import QuestionType from '../../components/QuestionType/QuestionType';
import Categories from '../../components/Categories/Categories';
import categoriesData from '../../data/categories';
import Select from '../../components/SelectMenu/SelectMenu';
import Button from '../../components/Button/Button';
import Quizzes from '../../components/Quizzes/Quizzes';
import classes from './form.scss';

type Props = {};

type State = {
  validated: boolean,
  showQuizzes: boolean
};

type FormData = {
  number?: string,
  diffculty?: string,
  type?: string,
  category?: string
};

export default class Form extends React.Component<Props, State> {
  state = {
    validated: false,
    showQuizzes: false,
  };

  data: FormData = {
    type: 'any',
    diffculty: 'easy'
  };

  validate() {
    const {
      number, diffculty, type, category,
    }: FormData = this.data;

    if (number && diffculty && type && category) {

      if (!this.state.validated) {
        this.setState({
          validated: true,
        });
      }
    } else if (this.state.validated) {
      this.setState({
        validated: false,
      });
    }
  }

  handleSubmit() {
    if (this.state.validated) {
      this.setState({
        showQuizzes: true,
      });
    }
  }

  handleChange(id: string, value: string) {
    this.data[id] = value;

    this.validate();
  }

  clearData() {
    this.data = {};
    this.setState({
      validated: false,
      showQuizzes: false,
    });
  }

  render() {
    return !this.state.showQuizzes ? (
      <form>
        <TextInput
          id="number"
          onChange={this.handleChange.bind(this)}
          label="number of questions"
          type="number"
        />

        <Categories
          id="category"
          onChange={this.handleChange.bind(this)}
          options={categoriesData}
          extraCategories={['extra1', 'extra2', 'extra3']}
        />

        <div className={classes.fieldWrapper}>
          <span className={classes.fieldLabel}>type:</span>
          <RadioButtons
            className={classes.typeWrapper}
            id="type"
            onChange={this.handleChange.bind(this)}
            options={['true', 'multiple', 'any']}
            Label={QuestionType}
            labelClass={classes.labelClass}
            defaultChecked={0}
          />
        </div>

        <div className={classes.fieldWrapper}>
          <span className={classes.fieldLabel}>diffculty:</span>
          <Select
            className={classes.diffcultyWrapper}
            id="diffculty"
            onChange={this.handleChange.bind(this)}
            options={['easy', 'hard', 'medium']}
            defaultSelected={0}
          />
        </div>

        <Button
          disabled={!this.state.validated}
          onClick={() => {
            this.handleSubmit();
          }}
        >
          Start
        </Button>
      </form>
    ) : (
      <Quizzes />
    );
  }
}
