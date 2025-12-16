import styled from 'styled-components/native';

export const ConteudoPai = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding: 5%;
  align-items: center;
`;

export const AreaDaLogo = styled.View`
  align-items: center;
  margin-top: 6%;
  margin-bottom: 4%;
`;

export const ImagemLogo = styled.Image`
  width: 70%;
  aspect-ratio: 1.55;
  max-width: 320px;
`;

export const Subtitulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-top: 2%;
`;

export const TextoPequeno = styled.Text`
  font-size: 16px;
  color: #888;
  margin-bottom: 4%;
`;

export const CaixaDeEntrada = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4%;
  border-width: 2px;
  border-color: #1D5B42;
  border-radius: 10px;
  padding-horizontal: 16px; 
`;

export const CampoDeTexto = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 18px;
  color: #333;
  margin-left: 3%; 
  outline-style: none;
`;

export const BotaoPrimario = styled.TouchableOpacity`
  width: 100%; 
  height: 52px;
  background-color: #1e513a;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 3%;
  outline-style: none;
`;

export const BotaoSecundario = styled(BotaoPrimario)`
  background-color: #e5a93d;
  margin-top: 0px;
`;

export const TextoDoBotao = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;