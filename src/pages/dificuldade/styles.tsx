import styled from 'styled-components/native';

export const ConteudoPai = styled.SafeAreaView`
  flex: 1;
  background-color: #f8f9ff; 
  padding: 4%;
  align-items: center;
`;

export const AreaDaLogo = styled.View`
  align-items: center;
  margin-top: 8%;
  margin-bottom: 6%;
`;

export const ImagemLogo = styled.Image`
  aspect-ratio: 1.66;
  max-width: 260px;
`;

export const TituloPrincipal = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const AreaBotoesMenu = styled.View`
  width: 100%;
  gap: 3%; 
`;

export const BotaoMenu = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: #1D5B42; 
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  outline-style: none;
  margin-top: 30px;
`;

export const TextoBotaoMenu = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
`;