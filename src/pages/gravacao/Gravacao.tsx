import React from 'react';
import { Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './styles';

const AudioWaveImage = "https://i.stack.imgur.com/vH79H.png"; 

export default function Gravacao() {
  return (
    <S.Container>
      <S.TopTitleButton>
        <S.TitleText>Tapota Ekatîmnhe</S.TitleText>
      </S.TopTitleButton>

      <S.LanguageSelector>
        <S.LanguageText>Wai Wai</S.LanguageText>
        <MaterialCommunityIcons name="swap-horizontal" size={30} color="black" />
        <S.LanguageText>Português</S.LanguageText>
      </S.LanguageSelector>

      <S.AudioVisualizerContainer>
        <Image 
          source={{ uri: AudioWaveImage }} 
          style={{ width: '80%', height: 60 }} 
          resizeMode="contain" 
        />
      </S.AudioVisualizerContainer>

      <S.MicrophoneButton activeOpacity={0.7}>
        <MaterialCommunityIcons name="microphone" size={40} color="white" />
      </S.MicrophoneButton>
    </S.Container>
  );
}