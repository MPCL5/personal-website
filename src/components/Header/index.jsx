import {Logo} from "@/components/Header/Logo";
import {GitButton} from "@/components/Header/GitButton";
import {NavigationBar} from "@/components/Header/NavigationBar";

export const Header = () => {
    return <header className="container d-flex justify-content-between align-items-center">
        <Logo/>
        <NavigationBar/>
        <GitButton />
    </header>;
};
