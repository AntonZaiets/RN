import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { ArrowGreenSvg } from '../../Icons/ArrowGreenSvg';
import { LinkWhiteSvg } from '../../Icons/LinkWhiteSvg';
import { ArrowLeftSvg } from '../../Icons/ArrowLeftSvg';
import { LinkGreenSvg } from '../../Icons/LinkGreenSvg';
import styles from './HomeDashboardStyles';

const ListHeaderComponent = () => {
  return (
    <SafeAreaView>
      <>
        <View style={styles.testTask}>
          <View style={styles.leftSide}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>Test task</Text>
              <Text
                style={{ fontSize: 13, fontWeight: '400', color: '#858C94' }}>
                Lorem ipsum
              </Text>
            </View>
            <View style={styles.goToCall}>
              <Text
                style={{ fontSize: 15, fontWeight: '500', color: '#009E81' }}>
                Go to call
              </Text>
              <View style={styles.image}>
                <ArrowGreenSvg />
              </View>
            </View>
          </View>
          <View>
            <Image source={require('../../Icons/TestTask.png')} />
          </View>
        </View>
        <View style={styles.beforeContainer}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: '#606773',
              marginBottom: 10,
            }}>
            Before you Start
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.bank}>
              <View style={{display: 'flex', flexDirection: 'row', }}>
                <View style={{ marginRight: 15 }}>
                  <LinkWhiteSvg />
                </View>
                <Text
                    style={{ fontSize: 15, fontWeight: '500', color: '#FFFFFF' }}>
                  Link your Bank{'\n'}Account
                </Text>
              </View>
              <View style={styles.bankBot}>
                <Text
                  style={{ fontSize: 15, fontWeight: '500', color: '#FFFFFF' }}>
                  2 steps
                </Text>
                <ArrowLeftSvg />
              </View>
            </View>
            <View style={styles.wallet}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{ marginRight: 15 }}>
                  <LinkGreenSvg />
                </View>
                <Text
                    style={{ fontSize: 15, fontWeight: '500', color: '#06070A' }}>
                  Link your Wallet{'\n'}Account
                </Text>
              </View>
              <View style={styles.bankBot}>
                <Text
                  style={{ fontSize: 15, fontWeight: '500', color: '#158FAA' }}>
                  3 steps
                </Text>
                <ArrowLeftSvg />
              </View>
            </View>
          </ScrollView>
        </View>
        <Text style={{marginTop: 20, marginBottom: 5, fontSize: 15, fontWeight: '400', color: '#606773',}}>Posts</Text>
      </>
    </SafeAreaView>
  );
};

export default ListHeaderComponent;
