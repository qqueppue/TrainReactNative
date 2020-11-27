/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';
import CounterList from './CounterList';

const App = ({counter, handleIncrement, handleDecrement, handleAddCounter, handleRemoveCounter}) => {
    // container에서 가져온 값
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.view}>
                {/* <Text children="카운터 추가버튼 영역" /> */}
                <Button title="카운터 추가" onPress={handleAddCounter} />
                <Text children="    " />
                <Button title="카운터 삭제" onPress={handleRemoveCounter} />
            </View>
            <View>
                {/* <Text children="추가된 카운터 영역" /> */}
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
                {/* CounterList로 값을 보냄 */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: '100%',
        backgroundColor: '#a9a9a9',
        paddingTop: '10%',
    },
    view: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum: PropTypes.number,
    })),
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleAddCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
};

App.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('handleIncrement not defined'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
    handleAddCounter: () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter: () => console.warn('handleRemoveCounter not defiend'),
};

export default App;
