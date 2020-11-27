/* eslint-disable prettier/prettier */
const initialState = {
    counter: [
        {
            counterNum: 0,
        },
    ],
};

const Counter = (state = initialState, action) => {
    const {counter} = state;

    switch (action.type) {  // 순수함수, 실제 로직 처리
        case 'INCREMENT':
            // alert('값 증가');
            return ({
                counter: [
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum + action.index,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ]}); // 카운터 +
        case 'DECREMENT':
            // alert('값 감소');
            return ({
                counter: [
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ]}); // 카운터 -
        case 'ADD':
            // alert('ADD 실행');
            return ({
                counter: [
                    ...counter,   //자기 스스로
                    {
                        counterNum: 0,
                    },
                ],
            }); // 카운터 추가
        case 'REMOVE':
            // alert('REMOVE 실행');
            return ({
                counter: counter.slice(0, counter.length - 1),  //counter 안에있는 제일 끝에 있는 값을 자르는 역할
            }); // 카운터 삭제
        default:
            return state;
    }
};

export default Counter;
