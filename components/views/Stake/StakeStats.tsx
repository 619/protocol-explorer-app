import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface ValidatorOption {
    id: string;
    name: string;
    logoUrl: string;
}

export default function StakeMenu() {
    const router = useRouter()
    // const sepUrl = "https://eth-sepolia.g.alchemy.com/v2/OoG1ibJTRc2-guXwXvN0fLxMvR384Lb3";
    // const sepApiKey = "OoG1ibJTRc2-guXwXvN0fLxMvR384Lb3";
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<ValidatorOption | null>(null);
    const [walletBalance, setWalletBalance] = useState("5.832");
    const [inputAmount, setinputAmount] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSelect = (option: ValidatorOption) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const [yourValidators, setYourValidators] = useState([{name: 'Umbrella', status: 'okay', fee: '1', amount: '12'}]);

    return (
        <div className="w-full flex justify-center flex-col items-center">
            <div className="flex flex-col w-full max-w-screen-sm justify-center items-center">
                <div className="w-full flex flex-col mb-8">
                    <div className="w-full text-center mb-2 text-xl font-bold">
                        Staking With:
                    </div>
                    <div className="w-full text-center mb-4 text-xl font-bold">
                        Umbrella.pool.S1
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/stake')}>Stake</Button>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex flex-col mb-2">
                        <div className="w-full flex flex-col mb-2">
                            <div className="mt-2 mb-2 pb-2 border-b border-gray-200">
                                <div className="w-full flex mb-2 text-sm text-gray-500">
                                    Total amount staked
                                </div>
                                <div className="w-full flex justify-between mb-2">
                                    <div className="text-sm font-semibold">5.0 NEAR</div>
                                    <div className="text-sm">STATUS</div>
                                </div>
                                <div className="w-full flex justify-between mb-2">
                                    <div className="text-sm text-gray-400">$40.00</div>
                                    <div className="text-sm text-gray-400">IP</div>
                                </div>
                            </div>
                            <div className="mt-2 mb-2 pb-2 border-b border-gray-200">
                                <div className="w-full flex mb-2 text-sm text-gray-500">
                                    Pending Withdrawal
                                </div>
                                <div className="w-full flex justify-between mb-2">
                                    <div className="text-sm font-semibold">0 NEAR</div>
                                    <div className="text-sm">STATUS</div>
                                </div>
                                <div className="w-full flex justify-between mb-2">
                                    <div className="text-sm text-gray-400">$0.00</div>
                                    <div className="text-sm text-gray-400">IP</div>
                                </div>
                            </div>
                            <div className="mt-2 mb-4 pb-4 border-b border-gray-200">
                                <div className="w-full flex mb-2 text-sm text-gray-500">
                                    Available for withdrawal
                                </div>
                                <div className="w-full flex justify-between mb-2">
                                    <div className="text-sm font-semibold">2.5 NEAR</div>
                                    <div className="text-sm">STATUS</div>
                                </div>
                                <div className="w-full flex justify-between mb-2">
                                    <div className="text-sm text-gray-400">$20.00</div>
                                    <div className="text-sm text-gray-400">IP</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mb-2 mt-4">
                            <div className="text-lg font-semibold">
                                Your Current Validators
                            </div>
                            <ul className="list-none p-0">
                                {yourValidators.map(validator => (
                                    //Name, fee, status, amount currently staked
                                    <li key={validator.name} className="mt-2">
                                        <div className="w-full flex justify-between mb-2">
                                            <div className="text-sm">{validator.name}</div>
                                            <div className="text-sm">Status: {validator.status}</div>
                                        </div>
                                        <div className="w-full flex justify-between mb-2">
                                            <div className="text-sm text-gray-400">{validator.fee}% Fee</div>
                                            <div className="text-sm text-gray-400">{validator.amount} IP</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
