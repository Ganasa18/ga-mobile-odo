import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import Gap from '../Gap';

const ModalConfirm = ({
  title,
  subtitle,
  submit = 'Iya',
  height = 200,
  width = '100%',
  onCancel,
  onSubmit,
}) => {
  const {globalReducer} = useSelector(state => state);
  const modalConfirm = globalReducer.isModalConfirm;

  const dispatch = useDispatch();
  return (
    <>
      <Modal
        transparent
        visible={modalConfirm}
        animationType="fade"
        onRequestClose={() => {
          dispatch({type: 'SET_MODAL_CONFIRM', value: false});
        }}>
        <View style={styles.modalContainer}>
          <View style={{...styles.modalPop, height: height, width: width}}>
            <Gap height={32} />
            <View style={styles.modalBody}>
              <Text style={styles.modalTitle}>{title}</Text>
              <Gap height={22} />
              <Text style={styles.modalSubTitle}>{subtitle}</Text>
            </View>
            <View style={styles.footerModal}>
              <TouchableOpacity activeOpacity={0.7} onPress={onCancel}>
                <View
                  style={{
                    ...styles.buttonModal,
                    borderEndWidth: 0.5,
                    borderEndColor: '#C2C2C2',
                  }}>
                  <Text style={styles.buttonModalText}>Batal</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#C2C2C2',
                }}></View>
              <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
                <View style={styles.buttonModal}>
                  <Text style={{...styles.buttonModalText, color: '#2A4878'}}>
                    {submit}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalConfirm;
