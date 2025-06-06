import Link from "next/link";

export function Menu(){
    return(
        <section>
        <li>Sua biblioteca</li>
            <Link href="premium" id="LINK">PREMIUM</Link>
            <Link href="planos"  id="LINK">PLANOS</Link>
            <Link href="login"   id="LINK">LOGIN</Link>
        </section>
    );
}
