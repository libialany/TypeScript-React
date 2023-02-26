import { useReducer, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
const initState = [{ id: parseInt(uuidv4()), name: 'Cut', src: 'https://cdn.shopify.com/s/files/1/1832/0821/files/catshark.jpg?v=1649869148' }]

const enum REDUCER_ACTION_TYPE {
  ADD,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload: { id: number, name: string, src: string }[],
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      return [...state, ...action.payload]
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const [textI, setTextI] = useState<string>("")
  const [image, setImage] = useState<string>("")

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD,
      payload: [{ id: parseInt(uuidv4()), name: textI, src: image }]
    })
  }
  return (
    <div className="container">

      <form onSubmit={handleAdd}>
        <h3>image name:</h3>
        <input type="text" value={textI} onChange={(e) => setTextI(e.target.value)} />
        <h3>image url:</h3>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <button className='btn'>ADD</button>
      </form>
      <div className="box">
      {state.map(el =>
        <div className="dream" key={el.id}>
          <img src={el.src} alt="" className="gallery__img" />
          <h2 className="gallery__title">{el.name}</h2>
        </div>
      )}
      </div>
    </div>
  )
}
export default App