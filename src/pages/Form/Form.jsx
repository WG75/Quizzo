// @flow

import React from 'react';
// import TextInput from '../../components/TextInput/TextInput'
// import SelectMenu from '../../components/SelectMenu/SelectMenu';
// import RadioButtons from '../../components/RadioButtons/RadioButtons';
// import QuestionType from '../../components/QuestionType/QuestionType';
import Categories from '../../components/Categories/Categories';
import categoriesData from '../../data/categories';
// import classes from './form.scss';

type Props = {};

type State = {};

export default class Form extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <form>
        <Categories
          options={categoriesData}
          onChange={(id: string, value: string) => console.log(id, value)}
          extraCategories={['sports4', 'sports3', 'sports1']}
          id="coma"
        />
      </form>
    );
  }
}
