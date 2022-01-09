import ServiceCard from "../components/serviceCard"
import { services } from "../data"

const index = () => {
  return(
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 text-base font-medium" > Eu atualmente possuo graduação em ciência da computação formado pelo 
      Instituto de Computação (ICOMP) Ofertado pela Univerdade Federal do Amazonas(UFAM). Eu tenho +3 anos com 
      experiencia em Teste de Software / Qualidade de Software e hoje busco aprimorar meus conhecimentos na 
      área como desenvolvedor Full Stack 
      </h5>

      <div 
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{marginLeft: '-1.5rem', marginRight:'-1.5rem'}}
        >

        <h6 className="my-3 text-xl font-bold"> O que eu te Ofereço </h6>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service => (
            <div 
              className="bg-gray-200 rouded-lg lg:col-span-1"
              key={service.title} >
              <ServiceCard service={service}></ServiceCard>
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}

export default index