import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4f8;
  align-items: center;
  padding: 20px;
`;

export const CharacterWrapper = styled.View`
  width: 225px;
  height: 225px;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
`;

export const SpeechBubble = styled.View`
  position: absolute;
  top: 35px; 
  right: 10px;
  width: 100px;  
  height: 85px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  border-width: 2px;
  border-color: #a8dadc;
`;

export const InstructionText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 30px 0;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  background-color: #1e513a;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 22px;
`;