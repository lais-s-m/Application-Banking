import { Container, ContainerInput, Example, Label, MsgError, StyledCurrencyInput, StyledInput } from './styles';

export default function Input ({ label, type, placeholder, example, error, register, name }) {
    const typeOfInput = () => {
        switch(type){
            case 'money':
                return (
                    <ContainerInput>
                        <StyledCurrencyInput
                        {...register(name)}
                        />
                        R$
                    </ContainerInput>
                    
                )
            case 'select':
                return (
                    <ContainerInput>
                        <select
                        {...register(name)}
                        >
                            <option value="income">Entrada</option>
                            <option value="outflow">Saída</option>
                        </select>
                    </ContainerInput>
                )
            default:
                return (
                    <StyledInput
                        placeholder={placeholder}
                        {...register(name)}
                    />
                )
        }
    }
    return (
        <Container>
            <Label>{label}</Label>
            {typeOfInput()}
            {error && <MsgError>{error}</MsgError>}
            {example && <Example>{example}</Example>}
        </Container>
    )
}