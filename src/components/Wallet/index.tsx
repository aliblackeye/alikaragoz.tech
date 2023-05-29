interface WalletProps {
  amount: number;
}

export default function Wallet(props: WalletProps) {
  const { amount } = props;
  return (
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="!text-xl font-semibold">
            Cüzdan
          </span>
        </div>
        <div className="flex items-center">
          <span className="!text-xl font-semibold">
            {amount} €
          </span>
        </div>
      </div>
    )
}
