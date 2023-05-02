import {AuthProvider} from '@context/AuthContext/AuthContext';
import store from '@redux/store/store';
import Root from '../QFX/SRC/Root/Root';
import {enableLatestRenderer} from 'react-native-maps';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import CompareAppVersion from '@utils/AppVErsion/AppVersion';
interface IProps {}

/**
 * @author
 * @function @App
 **/

const App: FC<IProps> = props => {
  const [device, setDevice] = useState('');
  useEffect(() => {
    CompareAppVersion();
  }, []);
  enableLatestRenderer();
  const id = DeviceInfo.getVersion();
  const {container} = styles;
  return (
    <AuthProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
