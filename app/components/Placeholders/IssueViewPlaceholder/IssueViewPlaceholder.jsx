// @flow
import React from 'react';
import { tasks } from 'data/assets';

import {
  IssueViewPlaceholderContainer,
  NoIssuesImage,
  Title,
  Subtitle,
} from './styled';

const IssueViewPlaceholder = () => (
  <IssueViewPlaceholderContainer>
    <NoIssuesImage src={tasks} alt="Not found" />
    <Title>Start your tracking expirience!</Title>
    <Subtitle>Select issue from the left in order to start tracking</Subtitle>
  </IssueViewPlaceholderContainer>
);

export default IssueViewPlaceholder;
