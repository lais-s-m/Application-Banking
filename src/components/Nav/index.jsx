import Button from "../Button";
import { StyledNav } from "./styles";

export default function Nav ( { getTag }) {
    return (
        <StyledNav>
            <div>
                <h2>Resumo financeiro</h2>
            </div>
            <div>
                <Button
                    backgroundColor="grey-pink"
                    buttonSize="small"
                    onClick={() => getTag('todos')}
                    >Todos
                </Button>
                <Button
                    backgroundColor="grey-pink"
                    buttonSize="small"
                    onClick={() => getTag('entrada')}
                    >Entradas
                </Button>
                <Button
                    backgroundColor="grey-pink"
                    buttonSize="small"
                    onClick={() => getTag('saída')}
                    >Despesas
                </Button>
            </div>
        </StyledNav>
    )
}