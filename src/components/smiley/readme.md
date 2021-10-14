# bonjour-smiley


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                     | Type      | Default |
| ---------- | ---------- | ----------------------------------------------- | --------- | ------- |
| `question` | `question` | Turn to `false` if no question should be asked. | `boolean` | `true`  |


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
| `--margin`           | a margin that reduces the smiley size in comparison to its host @default: 5rem |
| `--outline`          | the outline around the smiley button @default: none                            |
| `--size`             | the component size @default: 15rem                                             |
| `--text-font-size`   | text fonz-size @default: 1.25rem                                               |
| `--text-font-weight` | text fonz-weight @default: 400                                                 |
| `--text-line-height` | text line-height @default: calc(5rem / 3)                                      |
| `--text-top`         | an offset to display the question and labels @default: 1.6rem                  |
| `--zIndex`           | the smiley button z-index                                                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
