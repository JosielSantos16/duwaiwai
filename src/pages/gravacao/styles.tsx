import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4f8;
  align-items: center;
  padding: 20px;
`;

export const TopTitleButton = styled.View`
  width: 70%;
  height: 70px;
  background-color: #1e513a;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TitleText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

export const LanguageSelector = styled.View`
  width: 90%;
  height: 70px;
  background-color: white;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  /* Sombras */
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const LanguageText = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: 500;
`;

export const AudioVisualizerContainer = styled.View`
  width: 90%;
  height: 250px;
  background-color: white;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid #e1e8ed;
`;

export const MicrophoneButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background-color: #1e513a;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;