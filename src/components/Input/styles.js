import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontWeight: '500',
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{rotate: '90deg'}],
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.lightGrey,
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  optionTitle: {
    color: colors.black,
    marginBottom: 16,
    fontSize: 16,
  },
  optionText: {
    color: colors.black,
    marginBottom: 4,
    fontSize: 15,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});
