import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './styles';
import ImagemDaLogo from '../../../assets/logo_duwaiwai.png';

export default function Login() {
  const navegacao = useNavigation<any>();

  return (
    <S.ConteudoPai>
      <S.AreaDaLogo>
        <S.ImagemLogo source={ImagemDaLogo} resizeMode="contain" />
        <S.Subtitulo>Kirwanhe Mîmoko</S.Subtitulo>
        <S.TextoPequeno>Tekrã yaka Ewomko</S.TextoPequeno>
      </S.AreaDaLogo>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="account-outline" size={24} color="#1e513a" />
        <S.CampoDeTexto placeholder="Osotî" placeholderTextColor="#888" />
      </S.CaixaDeEntrada>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="key-outline" size={24} color="#1e513a" />
        <S.CampoDeTexto 
          placeholder="Seña" 
          secureTextEntry 
          placeholderTextColor="#888" 
        />
      </S.CaixaDeEntrada>

      <S.BotaoPrimario 
        activeOpacity={0.8}
        onPress={() => navegacao.navigate('Dificuldade')} 
      >
        <S.TextoDoBotao>Ewomko</S.TextoDoBotao>
      </S.BotaoPrimario>

      <S.BotaoSecundario 
        activeOpacity={0.8}
        onPress={() => navegacao.navigate('Cadastro')}
      >
        <S.TextoDoBotao>Kaknaxkra kacho</S.TextoDoBotao>
      </S.BotaoSecundario>
      
    </S.ConteudoPai>
  );
}