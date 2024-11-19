import React from 'react'
import { InfoCard } from '../molecules/InfoCard.jsx'
import { CodeBlock } from '../molecules/CodeBlock.jsx'
import { styled } from '@mui/material'
import { Title } from '../atoms/Title.jsx'
import { complexCodeBlocks } from '../../assets/codeBlocks.js'

const StyledMain = styled('main')`
    width: 100%;
    max-width: 900px;
    min-width: 250px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 8px;
    }
`

const StyledCard = styled('section')`
    width: 100%;
    max-width: 900px;
    min-width: 250px;
    border: 1px solid #454545;
    border-radius: 8px;
    margin: 0 16px 16px 0; 
    padding: 16px;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 12px;
    }
`

export const Main = () => {
    return (
        <StyledMain>
            <StyledCard>
                <Title variant="h4">Quick start</Title>
                <InfoCard>
                    First, prepare your Linux server* with an install of Ubuntu, Debian or CentOS.
                    Use this one-liner to set up an IPsec VPN server:
                </InfoCard>
                <CodeBlock>
                    wget https://get.vpnsetup.net -O vpn.sh && sudo sh vpn.sh
                </CodeBlock>
            </StyledCard>

            <StyledCard>
                <Title variant="h4">Installation</Title>
                <InfoCard>First, update your server with (Ubuntu/Debian):</InfoCard>
                <CodeBlock>sudo apt-get update && sudo apt-get dist-upgrade</CodeBlock>
                <CodeBlock>sudo yum update</CodeBlock>

                <InfoCard>
                    To install the VPN, please choose one of the following options:
                </InfoCard>
                <InfoCard>
                    Option 1: Have the script generate random VPN credentials for you (will be displayed when finished).
                </InfoCard>
                <CodeBlock>
                    wget https://get.vpnsetup.net -O vpn.sh && sudo sh vpn.sh
                </CodeBlock>

                <InfoCard>
                    Option 2: Edit the script and provide your own VPN credentials.
                </InfoCard>
                <CodeBlock>
                    {complexCodeBlocks.option2}
                </CodeBlock>

                <InfoCard>
                    Note: A secure IPsec PSK should consist of at least 20 random characters.
                </InfoCard>
                <InfoCard>
                    Option 3: Define your VPN credentials as environment variables.
                </InfoCard>
                <CodeBlock>
                    {complexCodeBlocks.option3}
                </CodeBlock>
            </StyledCard>
        </StyledMain>
    )
}
