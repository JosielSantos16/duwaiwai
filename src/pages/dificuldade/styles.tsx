import styled from 'styled-components/native';

export const ConteudoPai = styled.SafeAreaView`
  flex: 1;
  background-color: #f8f9ff; 
  padding: 20px;
  align-items: center;
`;

export const AreaDaLogo = styled.View`
  align-items: center;
  margin-top: 60px;
  margin-bottom: 50px;
`;

export const ImagemLogo = styled.Image`
  width: 200px;
  height: 120px;
`;

export const TituloPrincipal = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-top: 15px;
  text-align: center;
`;

export const AreaBotoesMenu = styled.View`
  width: 100%;
  gap: 20px; 
`;

export const BotaoMenu = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: #1D5B42; 
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  outline-style: none;
`;

export const TextoBotaoMenu = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
`;