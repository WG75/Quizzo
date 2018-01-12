// @flow

import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import QuestionType from '../../components/QuestionType/QuestionType';
import Categories from '../../components/Categories/Categories';
import categoriesData from '../../data/categories';
import Select from '../../components/SelectMenu/SelectMenu';
import Button from '../../components/Button/Button';
import classes from './form.scss';

type Props = {};

type State = {};

export default class Form extends React.Component<Props, State> {
  state = {};
  
  render() {
    return (
      <form>
        <TextInput id="number" onChange={this.handleChange} label="number of questions"/>
        <Categories id="catagory" onChange={this.handleChange} options={categoriesData} extraCategories={['extra1', 'extra2', 'extra3']}/>
        
        <div className={classes.fieldWrapper}>
          <span className={classes.fieldLabel}>type:</span>
          <RadioButtons className={classes.typeWrapper} id="type" onChange={this.handleChange} options={['true', 'multiple', 'any']} Label={QuestionType} labelClass={classes.labelClass} defaultChecked={0}/>
        </div>
        
        <div className={classes.fieldWrapper}>
          <span className={classes.fieldLabel}>diffculty:</span>
          <Select className={classes.diffcultyWrapper} id="diffculty" onChange={this.handleChange} options={['easy', 'hard', 'medium']}  defaultSelected={0}/>
        </div>

        <Button>Start</Button>
      </form>
    );
  }
}
