export type Json =
    | string
    | null
    | undefined
    | boolean
    | number
    | {
          [k: string]: Json
      }
    | Json[]
