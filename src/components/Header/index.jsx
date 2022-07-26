import Image from 'next/image';

import { StyledHeader } from './styles';

import HomeLogo from '../../images/home-logo.svg';
import Button from '../Button';
import Link from 'next/link';

export default function Header () {
    return (
        <StyledHeader>
            <Image src={HomeLogo}/>
            <Link href="/">
                <Button>Início</Button>
            </Link>
        </StyledHeader>
    )
}