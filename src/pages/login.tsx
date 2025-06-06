import Link from "next/link"
export default function login(){
    return(
        <main>
            <div>
            <input type="text" placeholder="email: "/>
            <input type="password" placeholder="senha: "/>
            <Link href="/">MENU</Link>
            </div>
        </main>
    )
}