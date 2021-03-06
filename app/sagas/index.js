// @flow
import { all, fork } from 'redux-saga/effects';

import * as settingsSagas from './settings';
import * as profileSagas from './profile';
import * as projectSagas from './projects';
import * as issueSagas from './issues';
import * as timerSagas from './timer';
import * as worklogsSagas from './worklogs';
import * as updaterSagas from './updater';
import * as uiSagas from './ui';

import initializeApp from './initializeApp';

export default function* rootSaga(): Generator<*, void, *> {
  yield all([
    // INITIALIZATION
    fork(initializeApp),

    // profile
    fork(profileSagas.loginFlow),
    fork(profileSagas.loginOAuthFlow),
    fork(profileSagas.logoutFlow),
    fork(profileSagas.checkJWT),
    fork(profileSagas.initializeMixpanel),
    fork(profileSagas.watchSetAuthFormStep),

    // projects
    fork(projectSagas.watchFetchProjectsRequest),
    fork(projectSagas.watchFetchSprintsRequest),
    fork(projectSagas.watchProjectSelection),

    // issues
    fork(issueSagas.watchFetchIssuesRequest),
    fork(issueSagas.watchSidebarTabChange),
    fork(issueSagas.watchFiltersChange),
    fork(issueSagas.watchIssueSelect),
    fork(issueSagas.transitionIssueFlow),
    fork(issueSagas.assignIssueFlow),
    fork(issueSagas.addIssueCommentFlow),

    // timer
    fork(timerSagas.watchStartTimer),
    fork(timerSagas.createIpcListeners),

    // settings
    fork(settingsSagas.localDesktopSettingsFlow),

    // worklogs
    fork(worklogsSagas.addManualWorklogFlow),
    fork(worklogsSagas.watchDeleteWorklogRequest),
    fork(worklogsSagas.watchEditWorklogRequest),

    // updater
    fork(updaterSagas.watchInstallUpdateRequest),
    fork(updaterSagas.checkForUpdatesFlow),
    fork(updaterSagas.initializeUpdater),

    // ui
    fork(uiSagas.watchSidebarTypeChange),
    fork(uiSagas.initializeTrayMenuListeners),
  ]);
}
