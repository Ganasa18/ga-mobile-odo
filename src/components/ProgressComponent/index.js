import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CircularProgress from 'react-native-circular-progress-indicator';

const ProgressComponent = ({step = 1, title, subtitle, border = 1}) => {
  if (step >= 4) {
    return (
      <View style={{...styles.containerWork, borderWidth: border}}>
        <View style={styles.containerStep}>
          <CircularProgress
            value={3}
            radius={50}
            duration={2000}
            maxValue={3}
            progressValueColor={'transparent'}
            activeStrokeColor={'#2A4878'}
            inActiveStrokeColor={'#C8D8E2'}
          />
          <Text style={styles.textProgress}>Selesai</Text>
        </View>
        <View style={styles.workTitleContainer}>
          <Text style={styles.titleWork}>Yeay.. Finish</Text>
          <Text style={styles.subTitleWork}>
            kamu sudah menyelesaikan report
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{...styles.containerWork, borderWidth: border}}>
      <View style={styles.containerStep}>
        <CircularProgress
          value={step}
          radius={50}
          duration={2000}
          maxValue={3}
          progressValueColor={'transparent'}
          activeStrokeColor={'#2A4878'}
          inActiveStrokeColor={'#C8D8E2'}
        />
        <Text style={styles.textProgress}>
          {step >= 4 ? ' Selesai' : `${step} OF 3`}{' '}
        </Text>
      </View>
      <View style={styles.workTitleContainer}>
        <Text style={styles.titleWork}>{title}</Text>
        <Text style={styles.subTitleWork}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ProgressComponent;
