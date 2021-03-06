/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SmileyState } from "./types/smiley";
export namespace Components {
    interface BonjourSmiley {
    }
}
declare global {
    interface HTMLBonjourSmileyElement extends Components.BonjourSmiley, HTMLStencilElement {
    }
    var HTMLBonjourSmileyElement: {
        prototype: HTMLBonjourSmileyElement;
        new (): HTMLBonjourSmileyElement;
    };
    interface HTMLElementTagNameMap {
        "bonjour-smiley": HTMLBonjourSmileyElement;
    }
}
declare namespace LocalJSX {
    interface BonjourSmiley {
        /**
          * Emits the state (super, well, okay, not_well or bad) that has been selected.
         */
        "onState"?: (event: CustomEvent<SmileyState>) => void;
    }
    interface IntrinsicElements {
        "bonjour-smiley": BonjourSmiley;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bonjour-smiley": LocalJSX.BonjourSmiley & JSXBase.HTMLAttributes<HTMLBonjourSmileyElement>;
        }
    }
}
