import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  Pressable,
} from 'react-native';
import {ThemeColors} from '@theme';

const SUPPORTED_ORIENTATIONS = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right',
];

class RBSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    };

    this.createPanResponder(props);
  }

  setModalVisible(visible, props) {
    const {
      height,
      minClosingHeight,
      openDuration,
      closeDuration,
      onClose,
      onOpen,
    } = this.props;
    const {animatedHeight, pan} = this.state;
    if (visible) {
      this.setState({modalVisible: visible});
      if (typeof onOpen === 'function') onOpen(props);
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: height,
        duration: openDuration,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: minClosingHeight,
        duration: closeDuration,
      }).start(() => {
        pan.setValue({x: 0, y: 0});
        this.setState({
          modalVisible: visible,
          animatedHeight: new Animated.Value(0),
        });

        if (typeof onClose === 'function') onClose(props);
      });
    }
  }

  createPanResponder(props) {
    const {closeOnDragDown, height} = props;
    const {pan} = this.state;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => closeOnDragDown,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, {dy: pan.y}], {useNativeDriver: false})(
            e,
            gestureState,
          );
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (height / 4 - gestureState.dy < 0) {
          this.setModalVisible(false);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  open(props) {
    this.setModalVisible(true, props);
  }

  close(props) {
    this.setModalVisible(false, props);
  }

  render() {
    const {
      animationType,
      closeOnDragDown,
      dragFromTopOnly,
      closeOnPressMask,
      closeOnPressBack,
      children,
      customStyles,
      keyboardAvoidingViewEnabled,
      backgroundColor,
      isThemeDark,
    } = this.props;
    const {animatedHeight, pan, modalVisible} = this.state;
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };

    return (
      <Modal
        transparent
        animationType={animationType}
        visible={modalVisible}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
        onRequestClose={() => {
          if (closeOnPressBack) this.setModalVisible(false);
        }}>
        <KeyboardAvoidingView
          enabled={keyboardAvoidingViewEnabled}
          behavior="padding"
          style={[styles.wrapper, customStyles.wrapper]}>
          <Pressable
            unstable_pressDelay={0}
            style={styles.mask}
            activeOpacity={1}
            onPress={() => (closeOnPressMask ? this.close() : null)}
          />
          <Animated.View
            {...(!dragFromTopOnly && this.panResponder.panHandlers)}
            style={[
              panStyle,
              styles.container,
              {
                height: animatedHeight,
                backgroundColor: isThemeDark
                  ? ThemeColors.darkMode.menubarPrimary
                  : ThemeColors.lightMode.background,
              },
              customStyles.container,
            ]}>
            {closeOnDragDown && (
              <View
                {...(dragFromTopOnly && this.panResponder.panHandlers)}
                style={[
                  styles.draggableContainer,
                  {
                    borderColor: backgroundColor,
                  },
                ]}>
                <View
                  style={[
                    styles.draggableIcon,
                    customStyles.draggableIcon,
                    {
                      backgroundColor: isThemeDark
                        ? ThemeColors.lightMode.background
                        : ThemeColors.darkMode.background,
                    },
                  ]}
                />
              </View>
            )}
            {children}
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

RBSheet.defaultProps = {
  animationType: 'none',
  height: 260,
  minClosingHeight: 0,
  openDuration: 300,
  closeDuration: 200,
  closeOnDragDown: false,
  dragFromTopOnly: false,
  closeOnPressMask: true,
  closeOnPressBack: true,
  keyboardAvoidingViewEnabled: Platform.OS === 'ios',
  customStyles: {},
  onClose: null,
  onOpen: null,
  children: <View />,
};

export default RBSheet;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: ThemeColors.lightMode.background,
  },
  mask: {
    flex: 1,
    // backgroundColor: "transparent"
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 0,
    overflow: 'hidden',
  },
  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: "transparent"
    borderTopColor: ThemeColors.lightMode.inputBorder,
    borderColor: 'white',
    borderWidth: 1,
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#ccc',
  },
});
