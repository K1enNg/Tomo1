import { SingleChoiceQuizProps } from "@/QuestionnaireLogic/quiz";
import { ROUTES } from "../naviagtion";

export const EntryTest_1: SingleChoiceQuizProps = {
    questionId: "ET_1",
    title: "Khởi động ban đầu",
    type: "single",
    choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    text: ["Ba mẹ bấm chạy đoạn âm thanh sau nhé", "Bé có phản ứng gì với âm thanh tần số cao như tiếng chuông không?"],
    audioPlayer: require("../../assets/images/AudioPlayerET.png"),
    next: ROUTES.ENTRY_TEST2
}

export const EntryTest_2: SingleChoiceQuizProps = {
    questionId: "ET_2",
    title: "Khởi động ban đầu",
    type: "single",
    choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    text: ["Bé có phát ra âm thanh nào không?"],
    image: require("../../assets/images/mascot_logo.png"),
    next: ROUTES.FLOW2_TITLE1
}