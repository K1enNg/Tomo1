import { QuizProps } from "@/app/Flow2Quiz";    
import { item } from "@/app/Flow2Quiz";
import { ROUTES } from "../naviagtion";

const items1: item[] = [
    { id: 1, label: 'Tai', image: require('../../assets/images/flow2/tai.png') },
    { id: 2, label: 'Tóc', image: require('../../assets/images/flow2/toc.png') },
    { id: 3, label: 'Mắt', image: require('../../assets/images/flow2/mat.png') },
    { id: 4, label: 'Mũi', image: require('../../assets/images/flow2/mui.png') },
    { id: 5, label: 'Môi', image: require('../../assets/images/flow2/moi.png') },
    { id: 6, label: 'Răng', image: require('../../assets/images/flow2/rang.png') }, 
    { id: 7, label: 'Miệng', image: require('../../assets/images/flow2/mieng.png') },
    { id: 8, label: 'Bàn tay', image: require('../../assets/images/flow2/bantay.png') },
    { id: 9, label: 'Ngón tay', image: require('../../assets/images/flow2/ngontay.png') },
    { id: 10, label: 'Vai', image: require('../../assets/images/flow2/vai.png') },
    { id: 11, label: 'Lưng', image: require('../../assets/images/flow2/lung.png') },
    { id: 12, label: 'Bụng', image: require('../../assets/images/flow2/bung.png') },
    { id: 13, label: 'Đầu gối', image: require('../../assets/images/flow2/daugoi.png') },
    { id: 14, label: 'Bàn chân', image: require('../../assets/images/flow2/banchan.png') },
  ];  

const items2: item[] = [
    { id: 1, label: 'Tai', image: require('../../assets/images/flow2/tai.png') },
    { id: 2, label: 'Tóc', image: require('../../assets/images/flow2/toc.png') },
    { id: 3, label: 'Mắt', image: require('../../assets/images/flow2/mat.png') },
    { id: 4, label: 'Mũi', image: require('../../assets/images/flow2/mui.png') },
    { id: 5, label: 'Môi', image: require('../../assets/images/flow2/moi.png') },
]

export const QUIZ_1: QuizProps = {   
    progress: 0.8, 
    items: items1,
    description: "Ba mẹ có thể đọc theo các bộ phận cơ thể dưới đây và ấn chọn khi đã đọc bộ phận đó rồi nhé.",
    btnText: "Tiếp Tục",
    zoom: false,
    next: ROUTES.FLOW2_PAUSE
}

export const QUIZ_2: QuizProps = {   
    progress: 1.0, 
    items: items2,
    zoom: true,
    audio: require("../../assets/images/flow2/Audio.png")
}