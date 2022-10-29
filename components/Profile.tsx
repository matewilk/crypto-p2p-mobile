import {View} from 'react-native';
import {Section} from './Section';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileSection = () => {
  return (
    <View className="h-full flex items-center justify-center">
      <Section title="Social Media">Connect</Section>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

export default ProfileSection;
