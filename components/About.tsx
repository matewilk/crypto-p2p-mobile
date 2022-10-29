import {View, Text, Linking} from 'react-native';
import {Section} from './Section';

const NewRelicDocsUrl =
  'https://docs.newrelic.com/docs/mobile-monitoring/new-relic-monitoring-react-native/monitor-your-react-native-application/';

const AboutSection = () => {
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';
  return (
    <View
      className={`h-full flex justify-center items-center bg-white dark:bg-black ${backgroundStyle}`}>
      <Section title="Learn More">
        Read{' '}
        <Text
          className="text-blue-500"
          onPress={() => Linking.openURL(NewRelicDocsUrl)}>
          the docs
        </Text>{' '}
        to discover what to do next
      </Section>
    </View>
  );
};

export default AboutSection;
