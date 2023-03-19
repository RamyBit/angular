import { Qanswer } from "./qanswer";

export interface McQuestion {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswer: Qanswer[],
    qcorrect: string,
    qinfo: string
}
