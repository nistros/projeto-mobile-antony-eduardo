import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { Alert, Button, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1D3D47', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/open-graph-logo-large-br.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo, Antony!</ThemedText>
        <HelloWave />
      </ThemedView> Saldo: **** R$
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          <Pressable
            onPress={() => { router.push('/explore'); 
              console.log('You tapped the button!');
            }}
            style={{
              backgroundColor: "#841584", // Cor de fundo similar ao Button padrão
              padding: 6,
              borderRadius: 10, // Altere esse valor para ajustar o arredondamento
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
            }}
          >
            <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Pix</ThemedText>
          </Pressable></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>

          <ThemedText type="defaultSemiBold">
            {Platform.select({

            })}
          </ThemedText>

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Transferências</ThemedText>
        <ThemedText>

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          <Pressable
            onPress={() => {
             router.push('/explore');

              console.log('You tapped the button!');
            }}
            style={{
              backgroundColor: "#841584", // Cor de fundo similar ao Button padrão
              padding: 6,
              borderRadius: 10, // Altere esse valor para ajustar o arredondamento
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 40
            }}
          >
            <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Extrato</ThemedText>
          
          <ThemedText></ThemedText>
          
          
          
          
          </Pressable></ThemedText>
        <ThemedText>
          <ThemedText type="subtitle">
            <Pressable
              onPress={() => {
                console.log('You tapped the button!');
              }}
              style={{
                backgroundColor: "#841584", // Cor de fundo similar ao Button padrão
                padding: 6,
                borderRadius: 10, // Altere esse valor para ajustar o arredondamento
                alignItems: 'center',
                justifyContent: 'center',
                width: 120,
                height : 40,
                marginTop: 20
                
              }}
            >
              <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Comprovantes</ThemedText>
            </Pressable></ThemedText>

          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  stepContainer: {
    gap: 0,
    marginBottom: 6,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    marginBottom: 1,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#ffff',
  }

});
