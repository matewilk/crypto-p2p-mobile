import React, {type PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View className="mt-8 px-2 w-8/12 flex justify-center items-center">
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
      <Text className="mt-2 text-xl text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
};

export {Section};
