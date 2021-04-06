import {Component, h, Host, Prop, State, Event, EventEmitter} from '@stencil/core';

import {SmileyState} from '../../types/smiley';

import {SmileyAsset} from '../asset/smiley.asset';
import {translate} from '../../utils/translations.utils';
import {debounce} from '../../utils/debounce.utils';

@Component({
  tag: 'bonjour-smiley',
  styleUrl: 'smiley.scss',
  shadow: true
})
export class Smiley {
  @Prop()
  question: boolean = true;

  @State()
  private smiley: SmileyState;

  @State()
  private stateLabel: 'hidden' | 'visible' = 'hidden';

  private questionTimeout: NodeJS.Timeout;

  @Event()
  private state: EventEmitter<SmileyState>;

  private debounceState = debounce(() => this.state.emit(this.smiley));

  componentWillLoad() {
    if (!this.question) {
      this.initState();
    }
  }

  componentDidLoad() {
    if (this.question) {
      this.questionTimeout = setTimeout(() => this.initState(), 2500);
    }
  }

  private next() {
    if (this.questionTimeout) {
      clearTimeout(this.questionTimeout);
    }

    if (!this.smiley) {
      this.initState();
      return;
    }

    switch (this.smiley) {
      case SmileyState.BAD:
        this.smiley = SmileyState.SUPER;
        break;
      case SmileyState.NOT_WELL:
        this.smiley = SmileyState.BAD;
        break;
      case SmileyState.OKAY:
        this.smiley = SmileyState.NOT_WELL;
        break;
      case SmileyState.SUPER:
        this.smiley = SmileyState.WELL;
        break;
      default:
        this.smiley = SmileyState.OKAY;
    }

    this.debounceState();
  }

  private initState() {
    this.smiley = SmileyState.SUPER;

    this.state.emit(this.smiley);

    setTimeout(() => (this.stateLabel = 'visible'), 50);
  }

  render() {
    return (
      <Host>
        {this.renderText()}
        <button onClick={() => this.next()} name="smiley">
          <SmileyAsset smiley={this.smiley}></SmileyAsset>
        </button>
      </Host>
    );
  }

  private renderText() {
    if (!this.smiley) {
      return (
        <label key="question" htmlFor="smiley" class="question">
          <slot name="question">{translate('question')}</slot>
        </label>
      );
    }

    return (
      <label key="state" htmlFor="smiley" class={`state ${this.stateLabel}`}>
        <slot>{translate(this.smiley)}</slot>
      </label>
    );
  }
}
