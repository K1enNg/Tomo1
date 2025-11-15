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
    time?: boolean;
    next?: string
}
  
const QuizTitle: React.FC<QuizTitleProps> = ({
    progress,
    source,
    description,
    btnText,
    time,
    next
}) => {
  const router = useRouter();

  time == true && useEffect(() => {
      let timer = setTimeout(() => {
        router.push(next); 
        // console.log("Timer finished")
      }, 5000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <View style={styles.container}>
      
      <View style={{ 
        width: "100%"
      }}>
       { progress && <ProgressGroup progress={progress ?? 0}/> }
      </View>

      <View style= {{ 
          flex: time == true ? 0 : 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        { source && <Image
          source={source}
          style = {{
            width: 256,
            height: 248,
          }}
        /> }
      </View>

      <View style= {{
          width: 340,
          height: 100,
          marginBottom: 80,
        }}>

        {description && <Text style = {[styles.nunitoLight, {fontSize: 18, textAlign: "center"}]}> 
          {description}
        </Text>
        }

      </View>
      
        { btnText && <View style= {{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#fcc555",
          width: 340,
          height: 50,
          borderRadius: 20, 
          marginBottom: 60
        }}>

          { btnText && <Pressable
          style = {{
            width: 340,
            height: 30,
          }}
          onPress={() => {   
            router.push(next);
            // console.log("Button Pressed");
          }}
        >

          { btnText && <Text style = {[styles.nunitoSemiBold, {fontSize: 24, textAlign: "center"}]}> 
            {btnText}
          </Text> }
        </Pressable> } 
      </View>}
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
