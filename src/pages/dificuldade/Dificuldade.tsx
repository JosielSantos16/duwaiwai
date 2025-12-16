import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import ImagemDaLogo from '../../../assets/logo_duwaiwai.png';

export default function Dificuldade() {
  const navegacao = useNavigation<any>();

  return (
    <S.ConteudoPai>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9ff" />
      
      <S.AreaDaLogo>
        <S.ImagemLogo source={ImagemDaLogo} resizeMode="contain" />
        <S.TituloPrincipal>Menekakî Cewne aniriri</S.TituloPrincipal>
      </S.AreaDaLogo>

      <S.AreaBotoesMenu>
        <S.BotaoMenu activeOpacity={0.8} onPress={() => navegacao.navigate('Mapa')} >
          <S.TextoBotaoMenu>Camkira</S.TextoBotaoMenu>
        </S.BotaoMenu>

        <S.BotaoMenu activeOpacity={0.8} onPress={() => navegacao.navigate('Mapa')}>
          <S.TextoBotaoMenu>Warañe</S.TextoBotaoMenu>
        </S.BotaoMenu>

        <S.BotaoMenu activeOpacity={0.8} onPress={() => navegacao.navigate('Mapa')}>
          <S.TextoBotaoMenu>Camkînhe</S.TextoBotaoMenu>
        </S.BotaoMenu>
      </S.AreaBotoesMenu>

    </S.ConteudoPai>
  );
}