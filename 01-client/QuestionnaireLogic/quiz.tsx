import { ImageSourcePropType } from "react-native";

export type QuizType = "multiple" | "single";

export interface Quiz {
    questionId: string;
    type: QuizType;
    answer?: any;  
    next?: string;
}

export interface item {
    id: number;
    label: string;
    image: ImageSourcePropType;
}

export interface QuizProps extends Quiz {
    progress: number;
    items: item[];
    description?: string;
    btnText?: string;
    zoom?: boolean;
  
    audio?: ImageSourcePropType
}

export interface SingleChoiceQuizProps extends Quiz {
    image?: ImageSourcePropType;
    title?: string;
    audioPlayer?: ImageSourcePropType;
    text: string[];
    choices: string[];
}