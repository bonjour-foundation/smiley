import {FunctionalComponent, h} from '@stencil/core';

import bad from '../../assets/bad.svg?format=text';
import notWell from '../../assets/not-well.svg?format=text';
import okay from '../../assets/okay.svg?format=text';
import supa from '../../assets/super.svg?format=text';
import well from '../../assets/well.svg?format=text';

import empty from '../../assets/empty.svg?format=text';

import {SmileyState} from '../../types/smiley';

interface SmileyAssetProps {
  smiley?: SmileyState;
}

export const SmileyAsset: FunctionalComponent<SmileyAssetProps> = ({smiley}: SmileyAssetProps) => {
  if (!smiley) {
    return <div innerHTML={empty}></div>;
  }

  switch (smiley) {
    case SmileyState.BAD:
      return <div innerHTML={bad}></div>;
    case SmileyState.NOT_WELL:
      return <div innerHTML={notWell}></div>;
    case SmileyState.OKAY:
      return <div innerHTML={okay}></div>;
    case SmileyState.SUPER:
      return <div innerHTML={supa}></div>;
    default:
      return <div innerHTML={well}></div>;
  }
};
