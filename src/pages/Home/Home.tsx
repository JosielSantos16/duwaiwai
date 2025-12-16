import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles'; 

import ImagemDaLogo from '../../../assets/logo_duwaiwai.png';

export default function Home() {
  const navegacao = useNavigation<any>();

  return (
    <S.ConteudoPai>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <S.AreaLogo>
        <S.ImagemLogo 
          source={ImagemDaLogo} 
          resizeMode="contain" 
        />

        <S.Subtitulo>Kirwanhe mîmoko</S.Subtitulo>
      </S.AreaLogo>

      <S.BotaoIniciar 
        activeOpacity={0.8} 
        onPress={() => navegacao.navigate('Login')} 
      >
        <S.TextoBotao>Ewomko</S.TextoBotao>
      </S.BotaoIniciar>
    </S.ConteudoPai>
  );
}