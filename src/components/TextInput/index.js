import {TextInput as TextInputRN, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const TextInput = ({icon, label, placeholder, ...restProps}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.searchSection}>
        <TextInputRN
          style={styles.input}
          placeholder={placeholder}
          {...restProps}
        />
        {icon}
      </View>
    </View>
  );
};

export default TextInput;
