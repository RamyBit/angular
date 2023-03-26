import { Qanswer } from "./qanswer";

export interface Question {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: Qanswer[],
    qcorrect?: string,
    qinfo: string,
    acorrect?:boolean
}
