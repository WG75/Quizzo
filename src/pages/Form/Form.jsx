// @flow

import React from 'react';
// import TextInput from '../../components/TextInput/TextInput'
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import classes from './form.scss';


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
          <SelectMenu className="diff" options={['easy', 'hard', 'medium', 'easy', 'hard', 'medium']} defaultSelected={2} id="diffculty" />
        </form>
      );
    }
}
