import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import NavMenu from '../components/NavMenu';
import AboutScreen from './AboutScreen';
import FAQScreen from './FAQScreen';
import ActivePloggerMap from './ActivePloggerMap';
import SuppliesScreen from './SuppliesScreen';
import CouchPloggingScreen from './CouchPloggingScreen';
import SocialMediaScreen from './SocialMediaScreen';
import InviteModalScreen from './InviteModalScreen';

export class MoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInviteModalVisible: false };
  }

  toggleIsInviteModalVisible = () => {
    this.setState(prevState => ({isInviteModalVisible: !prevState.isInviteModalVisible}));
  }

  pages = [
    {label: 'About Plogalong', route: 'About'},
    {label: 'FAQ', route: 'FAQ'},
    {label: 'Active Plogger Map', route: 'ActivePloggerMap'},
    {label: 'Plogging Supplies', route: 'Supplies'},
    {label: 'Couch Plogging', route: 'CouchPlogging'},
    {label: 'Plogging on Social Media', route: 'SocialMedia'},
    {label: 'Invite', route: false, handlePress: this.toggleIsInviteModalVisible},
  ];

  static navigationOptions = {
      header: null,
      headerBackTitle: 'More'
  };

  render() {
    return (
      <View style={styles.container}>
        <InviteModalScreen toggleIsInviteModalVisible={this.toggleIsInviteModalVisible} isInviteModalVisible={this.state.isInviteModalVisible} />
        <NavMenu routes={this.pages}/>
        <View style={{ height: 25 }} />
      </View>
    );
  }
}

export default createStackNavigator({
    Menu: MoreScreen,
    About: AboutScreen,
    FAQ: FAQScreen,
    ActivePloggerMap,
    Supplies: SuppliesScreen,
    CouchPlogging: CouchPloggingScreen,
    SocialMedia: SocialMediaScreen,
    InviteModal: InviteModalScreen
}, {
    headerStyle: { height: 100 }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divider: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
  },
});
