import Image from 'next/image';

import { Container, DescriptionAndType, TrashIcon, ValueAndTrashIcon } from './styles';

export default function Card ({ description, value, typeOfValue, index, removeCard }) {
    return (
        <Container typeOfValue={typeOfValue}>
            <DescriptionAndType>
                <h2>{description}</h2>
                <p>{typeOfValue}</p>
            </DescriptionAndType>
            <ValueAndTrashIcon>
                <p>R${value}</p>
                <div
                   onClick={removeCard}
                >
                    <TrashIcon />
                </div>
            </ValueAndTrashIcon>
        </Container>
    )
}