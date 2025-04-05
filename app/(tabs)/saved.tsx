import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {SafeAreaView} from "react-native-safe-area-context";

const Saved = () => {
    return (
        <SafeAreaView className="bg-primary flex-1 px-10">
            <View className="flex justify-center items-center flex-1 flex-col gap-5">
                <Image source={icons.save} className="size-10" tintColor="#fff" />
                <Text className="text-gray-500 text-base">Saved</Text>
            </View>
        </SafeAreaView>
    );
}
export default Saved
const styles = StyleSheet.create({})
