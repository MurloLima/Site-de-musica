import Link from "next/link"

export default function planos() {
    return (
        <main id="planos_premium">
            <div id="container">
                <div id="card individual">
                    <h2>Individual</h2>
                    <p>R$ 0 por 1 mês</p>
                    <p>Depois é só R$ 21,90/mês</p>
                    <ul>
                        <li>1 conta Premium</li>
                        <li>Cancel e quando quiser</li>
                        <li>Faça uma assinatura ou pague uma vez só</li>
                    </ul>
                    <a>Experimente 1 mês por R$ 0</a>
                    <p id="payment">Pagamento único</p>
                </div>

                <div id="card universitario">
                    <h2>Universitário</h2>
                    <p>R$ 0 por 1 mês</p>
                    <p>Depois é só R$ 11,90/mês</p>
                    <ul>
                        <li>1 conta Premium verificada</li>
                        <li>Desconto para estudantes </li>
                        <li>Cancel e quando quiser</li>
                    </ul>
                    <a>Experimente 1 mês por R$ 0</a>
                    <p id="payment">Pagamento único</p>
                </div>

                <div id="card duo">
                    <h2>Duo</h2>
                    <p>R$ 27,90/mês</p>
                    <ul>
                        <li>2 contas Premium</li>
                        <li>Cancel e quando quiser</li>
                        <li>Faça uma assinatura ou pague uma vez só</li>
                    </ul>
                    <a>Assinar o Premium Duo</a>
                    <p id="payment">Pagamento único</p>
                </div>
            </div>

            <Link href="/" id="bt_home_planos">   Volte para a pagina inicial!   </Link>
        </main>
    )
}