import Image from "next/image";
import { AvatarComponent, ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "../ui/button";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const ChainIcon = ({ iconUrl, name, background, size = 20 }: {
    iconUrl?: string;
    name?: string;
    background?: string;
    size?: number;
}) => (
    <div
        style={{
            background,
            width: size,
            height: size,
            borderRadius: 999,
            overflow: 'hidden',
            marginRight: 4,
        }}
    >
        {iconUrl && (
            <Image
                alt={`${name ?? 'Chain'} icon`}
                src={iconUrl}
                style={{ width: size, height: size }}
                width={size}
                height={size}
            />
        )}
    </div>
);

export const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
    return ensImage ? (
        <Image src={ensImage} width={size} height={size} style={{ borderRadius: size }} alt="ENS image"/>
    ) : (
        <Jazzicon diameter={size} seed={jsNumberForAddress(address)} />
    );
};

export const ButtonConnectWallet = () => {
    return <ConnectButtonWalletComponents />;
}

export const ConnectButtonWalletComponents = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                if (!mounted) {
                    return (
                        <div
                            aria-hidden="true"
                            style={{
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        />
                    );
                }

                const connected = account && chain;

                if (!connected) {
                    return (
                        <Button onClick={openConnectModal} variant="outline">
                            Connect Wallet
                        </Button>
                    );
                }

                if (chain?.unsupported) {
                    return (
                        <Button onClick={openChainModal}>
                            Wrong network
                        </Button>
                    );
                }

                return (
                    <div className="w-fit flex-wrap flex gap-3 z-50">
                        <Button onClick={openChainModal} variant={"outline"}>
                            {chain.hasIcon && (
                                <ChainIcon
                                    iconUrl={chain.iconUrl}
                                    name={chain.name}
                                    background={chain.iconBackground}
                                />
                            )}
                            {chain.name}
                        </Button>

                        <Button onClick={openAccountModal} variant={"outline"}>
                            {CustomAvatar && (
                                <CustomAvatar
                                    address={account.address}
                                    ensImage={account.ensAvatar}
                                    size={18}
                                />
                            )}
                            {account.displayName}
                        </Button>
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};