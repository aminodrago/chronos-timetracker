import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Flex } from 'components';

import { peopleBlue } from 'data/svg';
import { renderField } from '../Form';

import {
  ContentInner,
  PrimaryButton,
  Form,
  Lock,
  ContentIconContainer,
  Title,
  Subtitle,
} from '../styled';

const TeamStep = ({ onContinue, isActiveStep }) => (
  <ContentInner
    onKeyDown={(ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        ev.stopPropagation();
        onContinue();
      }
    }}
    isActiveStep={isActiveStep}
    step={1}
  >
    <ContentIconContainer>
      <Lock src={peopleBlue} alt="" width="24" />
    </ContentIconContainer>
    <Flex column alignCenter style={{ width: '100%' }}>
      <Title>Enter your team</Title>
      <Subtitle>Please fill in your JIRA host</Subtitle>
      <Form>
        <Field
          name="host"
          placeholder="example.atlassian.net"
          component={renderField}
          type="text"
          className="host"
          underlined
          autoFocus
        />
      </Form>
    </Flex>
    <PrimaryButton onClick={onContinue}>
      Continue
    </PrimaryButton>
  </ContentInner>
);

TeamStep.propTypes = {
  onContinue: PropTypes.func.isRequired,
  isActiveStep: PropTypes.bool.isRequired,
};

export default TeamStep;
