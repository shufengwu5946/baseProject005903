import * as types from '../../constants/redux/action-types';
// import { getVersion } from 'react-native-device-info';

const initialState = {
  haveNewVersion: false,
  newVersionCode: 0,
  newVersionName: '0.0.1',
  newUpgradeInfo: '',
  newversionDownloadUrl: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HAVE_NEW_VERSION:
      return {
        ...state,
        haveNewVersion: true,
      };
    default:
      return state;
  }
};
