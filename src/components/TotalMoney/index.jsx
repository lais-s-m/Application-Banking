import { Container, RowContainer, Text, Title } from "./styles";

export default function TotalMoney ({statement}) {
    const incomeValues = statement.map((item) => {
        if (item.typeOfValue === 'entrada'){
            const value = Number(item.value);
            return value;
        }
    })
    const outflowValues = statement.map((item) => {
        if (item.typeOfValue === 'saída'){
            const value = Number(item.value);
            return value;
        }
    })
    console.log(incomeValues)
    console.log(outflowValues)
    return (
        <Container>
        <RowContainer>
            <Title fontColor='black'>Valor Total: </Title>
            <Title fontColor='pink'> valor</Title>
        </RowContainer>
        <Text>O valor se refere ao saldo</Text>
    </Container>
    )
}