import React,{useRef} from 'react'
interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }: props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e)=>{handleAdd(e)}}>
            <input type='text' placeholder='Enter a Task' value={todo} ref={inputRef} onChange={(e)=>{setTodo(e.target.value)}}>
            </input>
            <button type='submit'>GO</button>
        </form>
    )
}

export default InputField
