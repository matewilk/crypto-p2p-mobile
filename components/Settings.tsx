import {useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {View, Button, Text, Platform} from 'react-native';
import {Section} from './Section';

const host = `${Platform.OS ? 'localhost' : '10.0.2.2'}:3000`;

const getSettings = () => {
  return (
    fetch(`http://${host}/settings/3`)
      .then(response => response.json())
      // .then(json => json.settings)
      .catch(error => {
        console.log(error);
      })
  );
};

const SettingsSection = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [data, setData] = useState({});

  const fetchSettings = async () => {
    const newData = await getSettings();
    setData(newData);
  };
  return (
    <View className="h-full flex flex-col items-center justify-center bg-red-50">
      <Section title="Debug">Or go</Section>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Section title="">Fetch Remote Settings</Section>
      <Button onPress={() => fetchSettings()} title="Fetch" />
      <Text className="text-black">{JSON.stringify(data)}</Text>
    </View>
  );
};

export default SettingsSection;
