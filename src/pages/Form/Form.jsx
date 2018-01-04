// @flow

import React from 'react';
// import TextInput from '../../components/TextInput/TextInput'
// import SelectMenu from '../../components/SelectMenu/SelectMenu';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import QuestionType from '../../components/QuestionType/QuestionType';
// import classes from './form.scss';


type Props = {

}

type State = {

}

export default class Form extends React.Component<Props, State> {
    state = {

    }


    render() {
      return (
        <form>
          <RadioButtons className="diff" id="type" options={['easy', 'hard', 'medium']} defaultChecked={1} Label={QuestionType} labelClass="q-type" onChange={(id: string, value: string) => console.log(id, value)} />
        </form>
      );
    }
}
