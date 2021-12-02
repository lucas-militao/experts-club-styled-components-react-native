import 'styled-components';
import { stylertTheme } from '.';

declare module 'styled-components' {
  type MyTheme = typeof stylertTheme;

  export interface DefaultTheme extends MyTheme {}
}
