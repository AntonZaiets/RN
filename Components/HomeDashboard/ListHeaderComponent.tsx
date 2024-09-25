import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { ArrowGreenSvg } from '../../Icons/ArrowGreenSvg';
import { LinkWhiteSvg } from '../../Icons/LinkWhiteSvg';
import { ArrowLeftSvg } from '../../Icons/ArrowLeftSvg';
import { LinkGreenSvg } from '../../Icons/LinkGreenSvg';
import styles from './HomeDashboardStyles';
import {useTranslation} from "react-i18next";

const ListHeaderComponent = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <>
        <View style={styles.testTask}>
          <View style={styles.leftSide}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>{t('homeDashboard.test task')}</Text>
              <Text
                style={{ fontSize: 13, fontWeight: '400', color: '#858C94' }}>
                {t('homeDashboard.lorem ipsum')}
              </Text>
            </View>
            <View style={styles.goToCall}>
              <Text
                style={{ fontSize: 15, fontWeight: '500', color: '#009E81' }}>
                {t('homeDashboard.go to call')}
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
            {t('homeDashboard.before you start')}
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.bank}>
              <View style={{display: 'flex', flexDirection: 'row', }}>
                <View style={{ marginRight: 15 }}>
                  <LinkWhiteSvg />
                </View>
                <Text
                    style={{ fontSize: 15, fontWeight: '500', color: '#FFFFFF' }}>
                  {t('homeDashboard.link your bank account')}
                </Text>
              </View>
              <View style={styles.bankBot}>
                <Text
                  style={{ fontSize: 15, fontWeight: '500', color: '#FFFFFF' }}>
                  {t('homeDashboard.2 steps')}
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
                  {t('homeDashboard.link your wallet account')}
                </Text>
              </View>
              <View style={styles.bankBot}>
                <Text
                  style={{ fontSize: 15, fontWeight: '500', color: '#158FAA' }}>
                  {t('homeDashboard.3 steps')}
                </Text>
                <ArrowLeftSvg />
              </View>
            </View>
          </ScrollView>
        </View>
        <Text style={{marginTop: 20, marginBottom: 5, fontSize: 15, fontWeight: '400', color: '#606773',}}>{t('homeDashboard.posts')}</Text>
      </>
    </SafeAreaView>
  );
};

export default ListHeaderComponent;
