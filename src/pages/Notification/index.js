import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Gap} from '../../components';

const NotificationScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Notifications</Text>
      {/* Notification */}
      <View style={styles.containerNotif}>
        <View style={styles.containContainerNotif}>
          <View style={styles.headerContainerNotif}>
            <Text style={styles.headerTitle}>Berangkat</Text>
            <Text style={styles.headerSubtitle}>08 : 00</Text>
          </View>
          <Gap height={8} />
          <Text style={styles.containSubtitle}>
            Jangan lupa untuk mengisi data terlebih dahulu sebelum anda
            berangkat{' '}
          </Text>
        </View>
      </View>
      {/* Notification */}
      <View style={styles.containerNotif}>
        <View style={styles.containContainerNotif}>
          <View style={styles.headerContainerNotif}>
            <Text style={styles.headerTitle}>Berakhir</Text>
            <Text style={styles.headerSubtitle}>17 : 00</Text>
          </View>
          <Gap height={8} />
          <Text style={styles.containSubtitle}>
            Jangan lupa untuk mengisi data terakhir pengisian
          </Text>
        </View>
      </View>
      {/* Notification */}
      <View style={styles.containerNotif}>
        <View style={styles.containContainerNotif}>
          <View style={styles.headerContainerNotif}>
            <Text style={styles.headerTitle}>Nyalakan ON</Text>
            <Text style={styles.headerSubtitle}>05 Juli</Text>
          </View>
          <Gap height={8} />
          <Text style={styles.containSubtitle}>
            Jangan lupa menyalakan fitur kembali untuk memulai kembali aktivitas
            anda
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
