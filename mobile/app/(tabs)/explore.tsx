import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/H.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedText style={styles.texto} > <title className="container"> </title>
        Área informativa sobre o pix
      </ThemedText>
      <ThemedText> O Pix é um sistema de pagamentos instantâneos criado pelo Banco Central do Brasil e lançado em novembro de 2020, com o objetivo de tornar as transações financeiras mais rápidas, práticas e acessíveis. Ele permite transferências de valores entre contas de diferentes instituições em até 10 segundos, funcionando 24 horas por dia, todos os dias da semana, inclusive feriados. Além das transferências entre pessoas físicas, o Pix também é utilizado para pagamentos em comércios, prestadores de serviço, impostos e contas em geral. Para facilitar o uso, os usuários podem cadastrar chaves Pix, que funcionam como identificadores únicos (CPF, e-mail, telefone ou chave aleatória), substituindo a necessidade de informar todos os dados bancários. O sistema ainda oferece a opção de pagamento por QR Code (estático ou dinâmico) e pelo recurso Pix Copia e Cola, tornando o processo ainda mais ágil e prático para todos os tipos de usuários.
        <link rel="stylesheet" href="nubank.com" />
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },

  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute'
  },
  texto: {
    fontFamily: "Special Gothic Expanded One"
    , fontWeight: 700

  }

});