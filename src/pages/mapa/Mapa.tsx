import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import ImagemDoMapa from '../../../assets/mapa_rio.png'; 

export default function Mapa() {
  const navegacao = useNavigation<any>();

  const niveis = [
    { id: '2', topo: '3%', esquerda: '70%' },
    { id: '1', topo: '18%', esquerda: '53%' },
    { id: '3', topo: '33%', esquerda: '75%' },
    { id: '4', topo: '48%', esquerda: '70%' },
    { id: '5', topo: '70%', esquerda: '55%' },
    { id: '6', topo: '85%', esquerda: '30%' },
  ];

  return (
    <S.ConteudoPai>
      <S.FundoMapa source={ImagemDoMapa} resizeMode="cover">
        
        {niveis.map((nivel) => (
          <S.BotaoNivel 
            key={nivel.id} 
            style={{ top: nivel.topo, left: nivel.esquerda }}
            activeOpacity={0.5}
            onPress={() => navegacao.navigate('Selecao')}
          />
        ))}

      </S.FundoMapa>
    </S.ConteudoPai>
  );
}