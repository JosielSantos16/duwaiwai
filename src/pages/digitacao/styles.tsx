import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f2f9; 
  align-items: center;
  padding-top: 50px;
`;

export const TopButton = styled.TouchableOpacity`
  width: 80%;
  height: 80px;
  background-color: #8fa89e;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const MiddleButton = styled.TouchableOpacity`
  width: 55%;
  height: 65px;
  background-color: #215a41;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 400;
`;

export const InputContainer = styled.View`
  width: 85%;
  height: 130px;
  background-color: #d9d9d9;
  padding: 10px;
`;

export const FakeInput = styled.TextInput`
  flex: 1;
  font-size: 24px;
`;

export const KeyboardImage = styled.Image`
  width: 100%;
  height: 350px;
  position: absolute;
  bottom: 0;
`;