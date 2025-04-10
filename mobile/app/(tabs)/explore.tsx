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
       source={require('@/assets/images/open-graph-logo-large-br.png')}
        style={styles.reactLogo}
        />
      }>
    <ThemedText> <title className="container"> </title>
    Pix e as suas magias!
    </ThemedText>
       <ThemedText> Aiaiaiaiaia</ThemedText>
     
      
     
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      
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

reactLogo:{
  height: '100%',
  width: '100%',
  bottom: 0,
  left: 0,
  position: 'absolute'}
});