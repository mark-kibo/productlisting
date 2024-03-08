import CheckBox from '@react-native-community/checkbox';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function page() {
  return (


    <SafeAreaProvider>
      <SafeAreaView className='bg-primary'>

        <View className='p-4 flex-1  mt-8'>

        </View>


        <StatusBar style="auto" />

      </SafeAreaView>
      <View className='flex-1 container p-4'>
        <View className='rounded-full mx-auto h-[210px] w-[240px] overflow-hidden '>
          <Image source={require("@/assets/images/logo.png")} className='w-full h-full rounded-full' />

        </View>
        <Text className='text-[#151008] text-center text-2xl mb-6 mt-4 font-bold'>Sign in</Text>
       
        <View className="inline-flex mb-4 w-full max-w-full mt-8 flex-col items-start gap-2 stroke-black transition-colors duration-300 ease-out focus-within:stroke-blue-700">
          <View className="relative w-full">

            <TextInput
              textContentType='emailAddress'
              className="w-full h-14 bg-[#F3EEE7] caret-primary text-textprimary rounded-lg border-slate-300 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-out  disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 py-2  placeholder:text-lg placeholder:capitalize placeholder:font-bold"
              id="textfield-1" placeholder="email" />
          </View>
          {/* <Text className="max-w-full text-xs font-medium leading-none text-slate-400">Helper text</Text> */}
        </View>
        <View className="inline-flex mb-4 w-full max-w-full mt-8 flex-col items-start gap-2 stroke-black transition-colors duration-300 ease-out focus-within:stroke-blue-700">
          <View className="relative w-full">

            <TextInput
              textContentType='newPassword'
              className="w-full h-14 bg-[#F3EEE7] text-textprimary rounded-lg border-slate-300 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-out  disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 py-2  placeholder:text-lg placeholder:capitalize placeholder:font-bold"
              id="textfield-1" placeholder="password" />
          </View>
          {/* <Text className="max-w-full text-xs font-medium leading-none text-slate-400">Helper text</Text> */}
        </View>

        <View className='flex items-start justify-start mb-2'>
            <Text className='text-textprimary tex-sm'>Forgot password</Text>
        </View>

       
        

        <View className='mt-2'>
          <Text className='text-muted text-textprimary text-center'>By signing in, you agree to the terms and conditions applied</Text>
        </View>
        <View className='flex flex-col gap-4  w-full my-4'>
          <TouchableOpacity className='bg-gray-100 w-full flex items-center justify-center gap-2 flex-row px-6 py-2 rounded-full'>

            <Image source={require("@/assets/images/google.png")} className='w-10 h-10' />
            <Text>Continue with google</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-gray-100 w-full flex items-center justify-center gap-2 flex-row px-6 py-2 rounded-full'>

            <Image source={require("@/assets/images/apple.png")} className='w-10 h-10' />
            <Text>Continue with apple</Text>
          </TouchableOpacity>


        </View>
        <View className='mt-6 w-full '>
          <TouchableOpacity className='bg-primary rounded px-6 py-3 text-lg w-full text-textprimary'>
            <Text className='text-xl text-center font-bold'>Log in to kibo products</Text>
          </TouchableOpacity>

        </View>
        <View className='mt-4 flex items-center justify-center px-2'>
          <Link href="/signup" className='text-muted text-gray-300 space-x-2'>
            Dont have an account ?
            <Text  className='text-primary font-bold'> Sign up</Text>
          </Link>

        </View>
      </View>




    </SafeAreaProvider>
  );
}

