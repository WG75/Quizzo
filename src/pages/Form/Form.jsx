// @flow

import React from 'react';
// import TextInput from '../../components/TextInput/TextInput'
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import RadioButtons from '../../components/RadioButtons/RadioButtons';

import classes from './form.scss';


type Props = {

}

type State = {

}

export default class Form extends React.Component<Props, State> {
    state = {

    }


    render() {
      const MockLabel = (props: {
        value: string,
        checked: boolean,
        name: string,
        className: string,
        onChange: () => void
      }) => (
        <input
          className={props.className}
          type="radio"
          name="category"
          value={props.value}
          checked={props.checked}
          onChange={props.onClick}
        />
      );

      return (
        <form>
          <RadioButtons className="diff" id="category" options={['easy', 'hard', 'medium']} defaultChecked={1} Label={MockLabel} labelClass="categoryItem" onChange={(id: string, value: string) => console.log(id, value)} />
        </form>
      );
    }
}
