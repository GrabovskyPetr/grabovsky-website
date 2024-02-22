import Logo from "./logo"

const Header: React.FC = () => {
    return (
        <header 
            className="w-full h-24 p-1
                       overflow-hidden
                       bg-primary-alpha flex
                       fixed backdrop-blur-sm
                       justify-center items-center"
        >
            <div 
                className="w-full max-w-5xl 
                           h-full flex px-3
                           justify-between items-center"
            >
                <div 
                    className="w-20 flex 
                               items-center 
                               justify-center"
                >
                    <Logo 
                        firstColor="var(--color-accent-one)" 
                        secondColor="var(--color-accent-two)" 
                    />
                </div>
                <div className="w-20 h-20 bg-accent-three flex items-center justify-center">
                    MENU
                </div>
            </div>
        </header>
    )
}

export default Header