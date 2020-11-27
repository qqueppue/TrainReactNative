/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Counter from './Counter';
import PropTypes from 'prop-types';

const CounterList = ({counter, handleIncrement, handleDecrement}) => {
    // counter에서 받아온 값
    const counterModule = counter.map((item, index) => (
        <Counter
            key={index}
            index={index}
            value={item}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
        />
        // Counter로 값을 보냄
    ));

    return (
        <View>
            {counterModule}
        </View>
    );
};

CounterList.propTypes = {
    counter: PropTypes.array,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};

CounterList.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('handleIncrement not defined'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
};


export default CounterList;
