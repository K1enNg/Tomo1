import { Text, View, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";
import ProgressGroup from "./progressGroup";

export interface QuizTitleProps {
    progress?: number;
    source?: ImageSourcePropType;
    description?: string;
    btnText?: string;
    time?: boolean
}
  
const QuizTitle: React.FC<QuizTitleProps> = ({
    progress,
    source,
    description,
    btnText,
    time
}) => {
  const router = useRouter();

  time == true && useEffect(() => {
      let timer = setTimeout(() => {
        router.push("/"); 
      }, 5000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <View style={styles.container}>

      <View style={{ 
        width: "100%",
        marginHorizontal: 10
      }}>
        <ProgressGroup progress={progress ?? 0}/>
      </View>

      <View>
        { source && <Image
          source={source}
          style = {{
            width: 256,
            height: 248,
            marginTop: 100
          }}
        /> }
      </View>

      <View style= {{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 340,
          height: 100
        }}>

        {description && <Text style = {[styles.nunitoLight, {marginBottom: 20, fontSize: 18, textAlign: "center"}]}> 
          {description}
        </Text>
        }

      </View>
      
      <View style= {{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#fcc555",
          width: 340,
          height: 50,
          borderRadius: 20, 
          marginBottom: 60
        }}>

        <Pressable
          style = {{
            width: 340,
            height: 30,
          }}
          onPress={() => {   
            // router.push('/Q1');
            console.log("Button Pressed");
          }}
        >

          <Text style = {[styles.nunitoSemiBold, {fontSize: 24, textAlign: "center"}]}>
            {btnText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default QuizTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#cfeef8"
  },
  nunitoLight: {
    fontFamily: "Nunito-Light",
    color: "#555",
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
  },
});
