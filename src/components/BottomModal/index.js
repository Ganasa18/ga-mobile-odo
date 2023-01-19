import {Text, View, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-radio-buttons-group';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {IcCloseModal} from '../../assets';
import Gap from '../Gap';
import Button from '../Button';

const BottomModal = ({body, title, onRequestClose, onPress, visible}) => {
  const {globalReducer} = useSelector(state => state);
  const modalRemark = globalReducer.isModalRemark;
  const radioSelect = globalReducer.isRemarkSelected;
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={onRequestClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalPop}>
            <View style={styles.modalHeader}>
              <Text style={styles.textModalClose}>{title}</Text>
              <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
                <View style={styles.iconModalClose}>
                  <IcCloseModal />
                </View>
              </TouchableOpacity>
            </View>
            <Gap height={20} />
            <View style={styles.modalBody}>{body}</View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BottomModal;
