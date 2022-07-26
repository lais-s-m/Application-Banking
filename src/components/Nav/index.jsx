import Button from "../Button";
import { StyledNav } from "./styles";

export default function Nav () {
    return (
        <StyledNav>
            <div>
                <h2>Resumo financeiro</h2>
            </div>
            <div>
                <Button
                    backgroundColor="grey-pink"
                    >Todos
                </Button>
                <Button
                    backgroundColor="grey-pink"
                    >Entradas
                </Button>
                <Button
                    backgroundColor="grey-pink"
                    >Despesas
                </Button>
            </div>
        </StyledNav>
    )
}