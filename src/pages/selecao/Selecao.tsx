import React from 'react';
import { Image, Text } from 'react-native';
import * as S from './styles';
import Personagem from "../../../assets/personagem.png";

const Selecao = () => {
  const opcoes = ["Café", "Olá", "Cutia"];

  return (
    <S.Container>
      <S.CharacterWrapper>
        <Image 
          source={Personagem} 
          style={{ width: 250, height: 250 }} 
          resizeMode="contain" 
        />
        
        <S.SpeechBubble>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            includeFontPadding: false, 
            textAlignVertical: 'center' 
          }}>
            Hay
          </Text>
        </S.SpeechBubble>
      </S.CharacterWrapper>

      <S.InstructionText>Ahce way tapota</S.InstructionText>

      {opcoes.map((item, index) => (
        <S.Button key={index} activeOpacity={0.7}>
          <S.ButtonText>{item}</S.ButtonText>
        </S.Button>
      ))}
    </S.Container>
  );
};

export default Selecao;