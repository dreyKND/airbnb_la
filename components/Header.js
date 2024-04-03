import Image from "next/image"

function Header() {
    return (
        <header className="sticky z-50 grid grid-cols-3 py-5 bg-white shadow-md">
             <div className="relative flex justify-between h-10 my-auto border-b">
                <Image src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"/>
            </div>
        </header>
            


           


    )
}
export default Header



