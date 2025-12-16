import styled from 'styled-components/native';

export const ConteudoPai = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  align-items: center;
`;

export const AreaDaLogo = styled.View`
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const ImagemLogo = styled.Image`
  width: 280px;
  height: 180px;
`;

export const Subtitulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
`;

export const TextoPequeno = styled.Text`
  font-size: 16px;
  color: #888;
  margin-bottom: 25px;
`;

export const CaixaDeEntrada = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #1D5B42;
  border-radius: 10px;
  padding-horizontal: 15px; 
`;

export const CampoDeTexto = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 18px;
  color: #333;
  margin-left: 10px; 
  outline-style: none;
`;

export const BotaoPrimario = styled.TouchableOpacity`
  width: 100%; 
  height: 65px;
  background-color: #1e513a;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
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