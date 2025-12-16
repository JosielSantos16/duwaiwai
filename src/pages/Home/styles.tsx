import styled from 'styled-components/native';

export const ConteudoPai = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const AreaLogo = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

export const ImagemLogo = styled.Image`
  width: 350px;
  height: 350px;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 60px;
  text-align: center;
`;

export const BotaoIniciar = styled.TouchableOpacity`
  width: 60%;
  height: 60px;
  background-color: #1D5B42;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  outline-style: none;
  elevation: 3;
`;

export const TextoBotao = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
`;