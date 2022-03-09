import IndeterminateProgressBarSync from './indeterminate-progress-bar.js';
import { Action } from '../../util/types.js'

export default class PulseIndeterminateProgressBar extends IndeterminateProgressBarSync {
    constructor(
        length = 9,
        delay = 50,
        blank = '▱',
        filled = '▰',
    ) {
        if (length % 2 == 0) throw Error('Length must be odd');

        super(length, delay, blank, filled);
    }

    protected timeout: number = (this.length + 1) * this.delay;

    protected consume(action: Action) {
        var progress = this.blankProgress;

        for (let i = 0; i <= this.length; i++) {
            setTimeout(() => {
                if (i == 0) progress = progress.replaceAt(this.half, this.filled);
                else if (i == this.half + 1) progress = progress.replaceAt(this.half, this.blank);
                else if (i <= this.half) progress = progress.replaceAt(this.half - i, this.filled).replaceAt(this.half + i, this.filled);
                else progress = progress.replaceAt(this.length - i, this.blank).replaceAt(i - 1, this.blank);
                action(i, progress);
            }, i * this.delay);
        }
    }
};