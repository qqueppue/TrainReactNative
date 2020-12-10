import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: {
        uri:
          'https://img.mimint.co.kr/story/bbs/2018/6/14/20180614003224_dofsblvf.jpg',
      },
    };
  }

  showPicker = () => {
    const options = {
      title: '이미지 선택',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '저장소',
      cancelButtonTitle: '취소',
      customButtons: [{name: 'kb', title: '카카오톡 이미지 선택'}],
      storageOptions: {
        skipBackup: true, // ios 용/ Android용
        path: 'Pictures/images/',
        privateDirectory: true,
      },
    };
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        alert('취소하였습니다.');
      } else if (res.error) {
        alert(`에러: : ${res.error}`);
      } else if (res.customButton) {
        //...
      } else {
        //선택된 이미지 경로 가져오기
        const uri = {uri: res.uri}; // uri > url
        this.setState({img: uri});
      }
    });
  };

  render() {
    return (
      <View style={styles.body}>
        <TouchableOpacity style={styles.opacity}>
          <Text
            children="✨이미지 선택 📷✨"
            style={styles.button}
            onPress={this.showPicker}
          />
        </TouchableOpacity>
        {/* <Button title="이미지 선택" /> */}
        <Text children={this.state.img.uri} style={styles.uriText} />
        <Image source={this.state.img} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffe6e6',
    flex: 1,
    padding: 10,
  },
  uriText: {
    fontSize: 12,
    color: '#000000',
    margin: 8,
  },
  image: {
    backgroundColor: '#ffb3b3',
    marginTop: 8,
    flex: 1,
    borderRadius: 10,
  },
  button: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  opacity: {
    backgroundColor: '#ff8080',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
    color: 'white',
  },
});
