// @flow 

import React from 'react';
import TextInput from '../../components/TextInput/TextInput'
import classes from './form.scss';


type Props = {

}

type State = {

}

export default class Form extends React.Component<Props, State> {
    state = {

    }

    render () {
        return (
            <form>
                <TextInput id="num" onChange={() => console.log(this.state)} label="number of question"/>
            </form>
        )
    }
}