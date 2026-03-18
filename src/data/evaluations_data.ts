import { EvalDef } from '@/components/ui/EvalEngine'
import {
  sessions1_2,
  sessions3_4,
  sessions5_6,
  sessions7_8,
  sessions9_10,
  sessions11_12,
  sessions13_14,
  sessions15_16,
} from './evaluations/index'

export type { EvalDef }
export type { EvalOption, EvalQuestion } from '@/components/ui/EvalEngine'

export const evaluationsData: EvalDef[] = [
  ...sessions1_2,
  ...sessions3_4,
  ...sessions5_6,
  ...sessions7_8,
  ...sessions9_10,
  ...sessions11_12,
  ...sessions13_14,
  ...sessions15_16,
]
