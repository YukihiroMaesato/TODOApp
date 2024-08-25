import styles from '../styles/InputForm.module.css';
export type TextAreaProps = Omit<JSX.IntrinsicElements["textarea"], "ref"> & {
    inputRef?: React.Ref<HTMLTextAreaElement>
}

export const TextArea = ({ inputRef, placeholder, ...props }: TextAreaProps) => {
    return (
        <>
            <textarea {...props} ref={inputRef}
                placeholder={placeholder}/>
        </>
    )
}