import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import ImagemDaLogo from '../../../assets/logo_duwaiwai.png';
import * as S from './styles';

export default function Cadastro() {
  const navegacao = useNavigation<any>();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim().toLowerCase();
    const senhaLimpa = senha.trim();

    if (!nomeLimpo || !emailLimpo || !senhaLimpa) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, e-mail e senha para cadastrar.');
      return;
    }

    try {
      const armazenados = await AsyncStorage.getItem('@duwaiwai/usuarios');
      const usuarios = armazenados ? JSON.parse(armazenados) : [];

      const jaExiste = usuarios.some(
        (usuario: { nome: string; email: string }) =>
          usuario.email === emailLimpo || usuario.nome.toLowerCase() === nomeLimpo.toLowerCase()
      );

      if (jaExiste) {
        Alert.alert('Cadastro existente', 'Esse usuário ou e-mail já foi cadastrado.');
        return;
      }

      const atualizado = [...usuarios, { nome: nomeLimpo, email: emailLimpo, senha: senhaLimpa }];
      await AsyncStorage.setItem('@duwaiwai/usuarios', JSON.stringify(atualizado));

      Alert.alert('Sucesso', 'Cadastro salvo. Você já pode entrar.');
      navegacao.navigate('Login');
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível salvar o cadastro agora.');
      console.error('Erro ao salvar cadastro', erro);
    }
  };

  return (
    <S.ConteudoPai>
      <S.AreaDaLogo>
        <S.ImagemLogo source={ImagemDaLogo} resizeMode="contain" />
        <S.Subtitulo>Tekrã Kaknaxkrã</S.Subtitulo>
        <S.TextoPequeno>Tekrã Ewomko</S.TextoPequeno>
      </S.AreaDaLogo>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="account-outline" size={26} color="#1D5B42" />
        <S.CampoDeTexto
          placeholder="Osoti"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
          autoCapitalize="words"
        />
      </S.CaixaDeEntrada>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="email-outline" size={26} color="#1D5B42" />
        <S.CampoDeTexto 
          placeholder="Emeyu" 
          keyboardType="email-address" 
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </S.CaixaDeEntrada>

      <S.CaixaDeEntrada>
        <MaterialCommunityIcons name="key-outline" size={26} color="#1D5B42" />
        <S.CampoDeTexto 
          placeholder="Seña" 
          secureTextEntry 
          placeholderTextColor="#888"
          value={senha}
          onChangeText={setSenha}
        />
      </S.CaixaDeEntrada>

      <S.BotaoPrimario activeOpacity={0.8} onPress={handleCadastro}>
        <S.TextoDoBotao>Kaknaxkra kacho</S.TextoDoBotao>
      </S.BotaoPrimario>

      <S.BotaoSecundario activeOpacity={0.8} onPress={() => navegacao.navigate('Login')}>
        <S.TextoDoBotao>Ewomko</S.TextoDoBotao>
      </S.BotaoSecundario>
      
    </S.ConteudoPai>
  );
}