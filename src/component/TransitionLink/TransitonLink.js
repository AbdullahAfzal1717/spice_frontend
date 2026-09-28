"use client";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePageOut } from "@/utils/animations";
import "./TransitionLink.css"; // Import the CSS file

const TransitionLink = ({ href, label }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            AnimatePageOut(href, router);
        }
    };

    return (
        <button className="transition-link" onClick={handleClick}>
            {label}
        </button>
    );
};

export default TransitionLink;
