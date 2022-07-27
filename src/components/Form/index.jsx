import Input from '../Input';
import Button from '../Button';

import { StyledForm } from './styles';

export default function Form ( 
    {   handleSubmit, 
        onSubmitFunction, 
        register,
        errors
    }) {

    return (
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
                label="Descrição"
                placeholder="Digite aqui sua descrição"
                example="Ex: Compra de roupas"
                error={errors.description?.message}
                register={register}
                name="description"
            />
            <section>
                <section>
                    <Input
                        label="Valor"
                        type="money"
                        error={errors.value?.message}
                        register={register}
                        name="value"
                    />
                </section>
                <Input
                    label="Tipo de valor"
                    type="select"
                    error={errors.typeOfValue?.message}
                    register={register}
                    name="typeOfValue"
                />
            </section>
            <Button
                backgroundColor="pink"
                type="submit"
                >Inserir valor
            </Button>
        </StyledForm>
    )
}