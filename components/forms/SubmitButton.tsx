import Image from "next/image";
import { Button } from "../ui/button";


interface ButtonProps {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
}


export const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button
        type="submit"
        disabled={isLoading}
        className={className ?? 'shad-primary-btn w-full'}>
        {isLoading ? (
            <div className="flex items-center gap-4">
                <Image
                    src="/assets/icons/loader.svg"
                    alt="loading"
                    width={24}
                    height={24}
                    className="animate-spin"
                />
                <p className="text-sm font-semibold">Loading...</p>
            </div>
        ): children}
    </Button>
  )
}
