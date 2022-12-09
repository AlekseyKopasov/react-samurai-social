export type FieldValidator = (value: string) => string | undefined

export const required: FieldValidator = (value) => (value ? undefined : 'Поле обязательно')

export const maxLengthCreator = (maxLength: number): FieldValidator => (value) =>
  value && value.length > maxLength ? `Must be ${ maxLength } characters or less` : undefined

