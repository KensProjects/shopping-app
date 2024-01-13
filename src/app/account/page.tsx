import Container from "../_components/Container"
import { getServerAuthSession } from "~/server/auth"
import AccountPageBlock from "../_components/account/AccountPageBlock"
import AccountPageSection from "../_components/account/AccountPageSection"
import Image from "next/image"

export default async function page() {

    const session = await getServerAuthSession()

    if (!session) return null

    return (

        <Container column_flow={true} extra_styling="justify-center items-center">
            <Container column_flow={true} extra_styling="w-3/4 h-full bg-slate-100 justify-center items-center">

                <AccountPageSection section_header="Personal Information">

                    <AccountPageBlock block_header={"Name"} >
                        <div>{session.user.name}</div>
                    </AccountPageBlock>


                    <AccountPageBlock block_header="Email">
                        <div>{session.user.email}</div>
                    </AccountPageBlock>

                    <AccountPageBlock block_header="Payment Methods (1)">
                        <div id="payment-method-card" className="bg-blue-900 text-white w-72 h-40 rounded-xl flex flex-col justify-between items-start p-4 text-sm">
                            <Image src={"/visa-logo.svg"} alt={"VISA"} width={40} height={40} />
                            <span className="text-xs">Default Card</span>
                            <span>Card ending in <strong>1234</strong></span>
                            <div className="flex justify-between items-center w-full ">
                                <span>{session.user.name}</span>
                                <span>12/99</span>
                            </div>
                        </div>
                    </AccountPageBlock>

                </AccountPageSection>

            </Container>


        </Container >

    )
}
