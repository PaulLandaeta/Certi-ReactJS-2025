import { CounterSonOne } from "./CounterRenderProps"

export const CounterRender = () => {
    return <CounterSonOne render={
        (count, increment, deccrement) => {
            return (
                <>
                    <div>
                        Soy el hijo haz click en el boton 
                    </div>
                    <div>
                        hiciste click {count} veces 
                    </div>
                    <button onClick={increment}> Incrementar</button>
                </>
            )
        }
    } />
};