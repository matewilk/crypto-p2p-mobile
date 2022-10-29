import {Text, View} from 'react-native';
import {Section} from './Section';

const HomeSection = () => {
  return (
    <View className="h-full flex items-center justify-center">
      <Section title="Step One">
        <>
          React Native <Text className="font-bold">New Relic</Text> Integration
          Example
        </>
      </Section>
    </View>
  );
};

export default HomeSection;
