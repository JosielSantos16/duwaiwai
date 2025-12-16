import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './styles';

export default function Digitacao() {
  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      
      <S.TopButton activeOpacity={0.8}>
        <S.ButtonText>Camkîra</S.ButtonText>
      </S.TopButton>

      <S.MiddleButton activeOpacity={0.8}>
        <S.ButtonText>Mewreko</S.ButtonText>
      </S.MiddleButton>

      <S.InputContainer>
        <S.FakeInput 
          multiline 
          autoFocus={false} 
          placeholder=""
        />
      </S.InputContainer>
    </S.Container>
  );
};
