import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import FirstComp from '../components/FirstComp';
import FirstButton from '../components/FirstButton';
import FirstCounter from '../components/FirstCounter';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('FirstComp', module)
  .add('Vide', () => <FirstComp/>)
  .add('Avec du texte', () => (
    <FirstComp>
      Hi
    </FirstComp>
  ))
  .add('Avec du texte et un FirstComp', () => (
    <FirstComp>
      Hi
      <FirstComp>Hoy</FirstComp>
    </FirstComp>
  ));

storiesOf('FirstButton',module)
  .add('Vide',()=><FirstButton onClick={action('clicked')}/>)
  .add('Avec du texte',()=><FirstButton onClick={action('clicked')}>Click</FirstButton>)

storiesOf('FirstCounter',module)
  .add('Vide',()=><FirstCounter/>)
  .add('Avec du texte',()=><FirstCounter>test</FirstCounter>)
