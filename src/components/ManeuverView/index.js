/**
 * @imports
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Styles from './styles';
import ManeuverArrow from '../ManeuverArrow';
import ManeuverLabel from '../ManeuverLabel';
import { Helpers } from "monkeys-native-toolbox"
const { IS_IPHONEX, WIDTH, Normalize } = Helpers;

/**
 * @component
 */
export default class ManeuverView extends Component {

  /**
   * propTypes
   * @type {}
   */
  static propTypes = {
    step: PropTypes.any.isRequired,
    fontFamily: PropTypes.string,
    fontFamilyBold: PropTypes.string,
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    arrowSize: PropTypes.number,
    arrowColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    withCloseButton: PropTypes.bool,
    onClose: PropTypes.func,
    onPress: PropTypes.func,
    unit: PropTypes.string,
    distance: PropTypes.number
  }

  /**
   * defaultProps
   * @type {}
   */
  static defaultProps = {
    step: undefined,
    fontFamily: 'MarkPro-Medium',
    fontFamilyBold: 'MarkPro-Bold',
    backgroundColor: '#f7f7f4',
    fontSize: Normalize(14),
    fontColor: 'rgb(255,255,255)',
    arrowSize: Normalize(40),
    arrowColor: 'rgb(17,17,17)',
    withCloseButton: false,
    onClose: undefined,
    onPress: undefined,
  }


  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);

  }


  /**
   * render
   * @returns {XML}
   */
  render() {

    const step = this.props.step;

    if (!step) return null;

    const maneuver = step.maneuver;
    console.log('step => ', step);
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.leftContainer}>
            <ManeuverArrow
              size={this.props.arrowSize}
              color={this.props.arrowColor}
              maneuver={maneuver}
            />
          </View>
          <View style={styles.rightContainer}>
            <ManeuverLabel
              {...this.props}
              instructions={step.instructions}
              fontSize={this.props.fontSize}
              color={this.props.fontColor}
            />
          </View>
        </View>
        <Text style={styles.distance}>
            {this.props.distance}{" "}{this.props.unit}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: IS_IPHONEX ? 40 : 16,
    width: WIDTH - 32,
    marginHorizontal: 16,
    backgroundColor: 'rgb(72,146,255)',
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 10,
    elevation: 1
  },
  leftContainer: {
    paddingTop: 12,
    paddingBottom: 12
  },
  image: {
    width: 32,
    height: 40,
    tintColor: 'rgb(255,255,255)',
    resizeMode: 'contain',
    marginLeft: 16
  },
  distance: {
    color: "rgb(255,255,255)",
    fontSize: Normalize(14),
    fontFamily: "MarkPro-Medium",
    marginLeft: 8,
    marginBottom: 8
  },
  rightContainer: {
    maxWidth: WIDTH - 112,
    paddingTop: 12,
    marginLeft: 12,
    paddingBottom: 8
  },
  situtation: {
    color: "rgb(255,255,255)",
    fontSize: Normalize(14),
    lineHeight: 20,
    fontFamily: "MarkPro-Medium",
    paddingBottom: 8
  },
  address: {
    color: "rgb(255,255,255)",
    fontSize: Normalize(16),
    fontFamily: "MarkPro-Bold",
    maxWidth: WIDTH - 112
  }
});