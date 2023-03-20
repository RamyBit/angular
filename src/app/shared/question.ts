
export interface Question {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: object[],
    qcorrect?: string,
    qinfo: string
}
