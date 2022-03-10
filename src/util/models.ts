import IndeterminateProgressBar from "../ipb/indeterminate-progress-bar";

export class Holder {
    constructor(
        readonly bar: IndeterminateProgressBar,
        readonly canvas: HTMLCanvasElement,
        readonly context: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext('2d')
    ) { }
}