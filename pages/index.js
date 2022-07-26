import Image from 'next/image';
import Link from 'next/link';

import KenzieLogo from '../src/images/launchpage-logo.svg';
import LaunchpageImg from '../src/images/launchpage-image.svg';

import Button from '../src/components/Button';
import GlobalStyle, { LaunchpageContainer } from '../styles/GlobalStyle';

export default function Launchpage () {
    return (
        <>
            <GlobalStyle/>
            <LaunchpageContainer>
                <div>
                    <Image src={KenzieLogo} />
                    <h2>Centralize o controle das suas finanças</h2>
                    <p>de forma rápida e segura</p>
                    <Link href="/home">
                        <Button backgroundColor="pink">Iniciar</Button>
                    </Link>
                </div>
                <Image src={LaunchpageImg} alt="launchpage image" />
            </LaunchpageContainer>
        </>
        
    )
}