import { Component, h, Host, State, Event, EventEmitter, ComponentInterface } from '@stencil/core';

import {SmileyState} from '../../types/smiley';

import {SmileyAsset} from '../asset/smiley.asset';
import {translate} from '../../utils/translations.utils';
import {debounce} from '../../utils/debounce.utils';

/**
 * @slot question - An optional slot to display your personal question
 */
@Component({
  tag: 'bonjour-smiley',
  styleUrl: 'smiley.scss',
  shadow: true
})
export class Smiley implements ComponentInterface {
  @State()
  private smiley: SmileyState;

  @State()
  private stateLabel: 'hidden' | 'visible' = 'hidden';

  /**
   * Emits the state (super, well, okay, not_well or bad) that has been selected.
   */
  @Event()
  state: EventEmitter<SmileyState>;

  private debounceState = debounce(() => this.state.emit(this.smiley));

  private next() {
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

    this.debounceState();

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
        {translate(this.smiley)}
      </label>
    );
  }
}
