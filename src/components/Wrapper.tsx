import Header from "./Header";

type Props = {
    children: JSX.Element
}

const Wrapper = ({children}: Props) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Wrapper;