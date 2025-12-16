import styled from 'styled-components/native';

export const ConteudoPai = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

export const AreaLogo = styled.View`
  align-items: center;
  margin-bottom: 6%;
`;

export const ImagemLogo = styled.Image`
  width: 70%;
  aspect-ratio: 1;
  max-width: 400px;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8%;
  text-align: center;
`;

export const BotaoIniciar = styled.TouchableOpacity`
  width: 80%;
  height: 52px;
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