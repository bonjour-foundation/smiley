# bonjour-smiley


<!-- Auto Generated Below -->


## Events

| Event   | Description                                                                  | Type                                                                                                                |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `state` | Emits the state (super, well, okay, not_well or bad) that has been selected. | `CustomEvent<SmileyState.BAD \| SmileyState.NOT_WELL \| SmileyState.OKAY \| SmileyState.SUPER \| SmileyState.WELL>` |


## Slots

| Slot         | Description                                        |
| ------------ | -------------------------------------------------- |
| `"question"` | An optional slot to display your personal question |


## CSS Custom Properties

| Name                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `--inner-margin`     | a margin that reduces the smiley size in comparison to its host @default: 3rem |
| `--margin`           | the component margin @default: 0 auto                                          |
| `--outline`          | the outline around the smiley button @default: none                            |
| `--size`             | the component size @default: 12rem                                             |
| `--text-font-family` | text font-family @default: inherit                                             |
| `--text-font-size`   | text font-size @default: 1rem                                                  |
| `--text-font-weight` | text font-weight @default: 800                                                 |
| `--text-line-height` | text line-height @default: calc(4rem / 3)                                      |
| `--text-top`         | an offset to display the question and labels @default: 1.6rem                  |
| `--zIndex`           | the smiley button z-index                                                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
