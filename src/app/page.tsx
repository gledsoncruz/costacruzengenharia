import { About } from "@/components/company/about";
import { Service } from "@/components/company/services";
import { Estimate } from "@/components/estimate";
import { Footer } from "@/components/footer";
import { TopHeader } from "@/components/topHeader";
import { getDataHome } from "@/utils/actions/get-data"
import { HomeProps } from "@/utils/home.type";

export default async function Home() {

  const { object }: HomeProps = await getDataHome()

  return (
    <main>      
      <TopHeader 
        contact={object.metadata.contact} 
        bgbanner={object.metadata.bgbanner} 
        workerbanner={object.metadata.workerbanner}
        headingslogam={object.metadata.headingslogam}
        menus={object.metadata.menus}
        title={object.title} />
      <About aboutCompany={object.metadata.aboutcompany}/>
      <Service object={object}/>
      <Estimate object={object} />
      <Footer />
    </main>
  );
}
