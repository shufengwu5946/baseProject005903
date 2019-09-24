import axiosAPI from '../../utils/axiosAPI';
import * as types from '../../constants/redux/action-types';

const checkUpgradeRequest = () => {
  return {
    type: types.CHECK_UPGRADE_REQUEST,
  };
};

const checkUpgradeSuccessHaveNew = (
  versionCode,
  versionName,
  info,
  downloadUrl
) => {
  return {
    type: types.CHECK_UPGRADE_SUCCESS_HAVE_NEW,
    versionCode,
    versionName,
    info,
    downloadUrl,
  };
};

const checkUpgradeSuccessNoNew = () => {
  return {
    type: types.CHECK_UPGRADE_SUCCESS_NO_NEW,
  };
};

function checkUpgradeFailed(error) {
  return {
    type: types.CHECK_UPGRADE_FAILED,
    error,
  };
}
const checkUpgrade = () => {
  const body = JSON.stringify({});

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (dispatch) => {
    dispatch(checkUpgradeRequest());

    // log

    axiosAPI
      .post(
        'https://github.com/shufengwu5946/testUpgrade/raw/master/app-release.apk',
        body,
        header
      )
      .then((response) => {
        dispatch(loginSuccess(response.data.versionCode));
      })
      .catch((error) => {
        dispatch(checkUpgradeFailed(error));
      });
  };
};

export default checkUpgrade;
