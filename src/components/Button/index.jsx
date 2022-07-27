import StyledButton from "./styles";

export default function Button ({children, backgroundColor, buttonSize, ...rest }) {
    return (
        <StyledButton
            backgroundColor={backgroundColor}
            buttonSize={buttonSize}
            {...rest}
        >
            {children}
        </StyledButton>
    )
}