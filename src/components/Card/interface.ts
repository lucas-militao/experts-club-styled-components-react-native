import { colors } from '../../theme/colors';

export enum CardStatus {
  PAGO = 'pago',
  EM_ABERTO = 'em aberto',
  EM_ATRASO = 'em atraso',
  REVERTIDO = 'revertido',
}

export type TCardStatusVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;
};

export interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus;
}

export interface ICardStyledProps {
  color: keyof typeof colors;
  strikedThrough: boolean;
}
