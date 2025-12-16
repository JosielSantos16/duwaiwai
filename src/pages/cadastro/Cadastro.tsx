import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './styles';
import ImagemDaLogo from '../../../assets/logo_duwaiwai.png';

export default function Cadastro() {
  const navegacao = useNavigation<any>();

  return (
    <S.ConteudoPai>
      <S.AreaDaLogo>
        <S.ImagemLogo source={ImagemDaLogo} resizeMode="contain" />
        <S.Subtitulo>Tekrã Kaknaxkrã</S.Subtitulo>
        <S.TextoPequeno>Tekrã Ewomko</S.TextoPequeno>
      </S.AreaDaLogo>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="account-outline" size={26} color="#1D5B42" />
        <S.CampoDeTexto placeholder="Osoti" placeholderTextColor="#888" />
      </S.CaixaDeEntrada>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="email-outline" size={26} color="#1D5B42" />
        <S.CampoDeTexto 
          placeholder="Emeyu" 
          keyboardType="email-address" 
          placeholderTextColor="#888" 
        />
      </S.CaixaDeEntrada>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="key-outline" size={26} color="#1D5B42" />
        <S.CampoDeTexto 
          placeholder="Seña" 
          secureTextEntry 
          placeholderTextColor="#888" 
        />
      </S.CaixaDeEntrada>

      <S.BotaoPrimario activeOpacity={0.8} onPress={() => navegacao.navigate('Login')}>
        <S.TextoDoBotao>Kaknaxkra kacho</S.TextoDoBotao>
      </S.BotaoPrimario>

      <S.BotaoSecundario activeOpacity={0.8} onPress={() => navegacao.navigate('Login')}>
        <S.TextoDoBotao>Ewomko</S.TextoDoBotao>
      </S.BotaoSecundario>
      
    </S.ConteudoPai>
  );
}