export type InputProps = Omit<JSX.IntrinsicElements["input"], "ref"> & {
  inputRef?: React.Ref<HTMLInputElement>
}

export const Input = ({ inputRef, placeholder, ...props }: InputProps) => {
  return (
    <>
      <input {...props} ref={inputRef}
        placeholder={placeholder} />
    </>
  )
}