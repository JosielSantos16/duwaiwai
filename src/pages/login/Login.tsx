import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import ImagemDaLogo from '../../../assets/logo_duwaiwai.png';
import * as S from './styles';

export default function Login() {
  const navegacao = useNavigation<any>();
  const [usuarioOuEmail, setUsuarioOuEmail] = useState('');
  const [senha, setSenha] = useState('');

  // botão de ver cadastros removido

  const handleLogin = async () => {
    const usuarioEntrada = usuarioOuEmail.trim();
    const senhaLimpa = senha.trim();

    if (!usuarioEntrada || !senhaLimpa) {
      Alert.alert('Campos obrigatórios', 'Informe usuário ou e-mail e a senha.');
      return;
    }

    try {
      const armazenados = await AsyncStorage.getItem('@duwaiwai/usuarios');
      const usuarios = armazenados ? JSON.parse(armazenados) : [];

      const entradaLower = usuarioEntrada.toLowerCase();
      const usuarioValido = usuarios.find(
        (usuario: { nome: string; email: string; senha: string }) =>
          (usuario.nome.toLowerCase() === entradaLower || usuario.email === entradaLower) &&
          usuario.senha === senhaLimpa
      );

      if (usuarioValido) {
        navegacao.navigate('Dificuldade');
      } else {
        Alert.alert('Login inválido', 'Usuário ou senha não conferem.');
      }
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível validar seu acesso agora.');
      console.error('Erro ao validar login', erro);
    }
  };

  return (
    <S.ConteudoPai>
      <S.AreaDaLogo>
        <S.ImagemLogo source={ImagemDaLogo} resizeMode="contain" />
        <S.Subtitulo>Kirwanhe Mîmoko</S.Subtitulo>
        <S.TextoPequeno>Tekrã yaka Ewomko</S.TextoPequeno>
      </S.AreaDaLogo>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="account-outline" size={24} color="#1e513a" />
        <S.CampoDeTexto
          placeholder="Osotî ou Emeyu"
          placeholderTextColor="#888"
          value={usuarioOuEmail}
          onChangeText={setUsuarioOuEmail}
          autoCapitalize="words"
        />
      </S.CaixaDeEntrada>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="key-outline" size={24} color="#1e513a" />
        <S.CampoDeTexto 
          placeholder="Seña" 
          secureTextEntry 
          placeholderTextColor="#888"
          value={senha}
          onChangeText={setSenha}
        />
      </S.CaixaDeEntrada>

      <S.BotaoPrimario 
        activeOpacity={0.8}
        onPress={handleLogin} 
      >
        <S.TextoDoBotao>Ewomko</S.TextoDoBotao>
      </S.BotaoPrimario>

      <S.BotaoSecundario 
        activeOpacity={0.8}
        onPress={() => navegacao.navigate('Cadastro')}
      >
        <S.TextoDoBotao>Kaknaxkra kacho</S.TextoDoBotao>
      </S.BotaoSecundario>

      {/* botão de ver cadastros removido */}
      
    </S.ConteudoPai>
  );
}