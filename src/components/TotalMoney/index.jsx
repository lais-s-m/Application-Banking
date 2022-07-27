import { Container, RowContainer, Text, Title } from "./styles";

export default function TotalMoney ({statement}) {
    const values = statement.map((item)=> {
        if (item.typeOfValue === 'entrada'){
            return Number(item.value)
        } else {
            return (Number(item.value) - 2 * Number(item.value))
        }
    })
    const sum = values.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);

    return (
        <Container>
        <RowContainer>
            <Title fontColor='black'>Valor Total: </Title>
            <Title fontColor='pink'>R${sum}</Title>
        </RowContainer>
        <Text>O valor se refere ao saldo</Text>
    </Container>
    )
}