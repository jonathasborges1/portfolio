import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
    return (
      <div className="px-6 py-2">
        {/* //! Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Educação</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Ciência da Computação
              </h5>
              <p className="font-semibold">Academia / Instrução / Formação (2013-2017)</p>
              <p className="my-3">
                Atualmente estou envolvido em projetos que possibilitem expandir meu nivel de programação,
                a elaboração desse portifólio por exemplo usando tecnologias como  next.js | tailwindcss | typescript.
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Experiencia</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
              <p className="font-semibold">Instituto de Pesquisa e Tecnologia Da Amazonia</p>
              <p className="my-3">Trabalhou por mais de 3 anos em Instituto de Pesquisa e Tecnologia da Amazonia (SIDIA)  especificamente
              no setor Google Approval, responsável pela Qualidade e Homologação de Sofware </p>
            </div>
          </div>
        </div>
  
        {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Linguagens & Framework</h5>
            <div className="my-2">
              {languages.map( (language) => (
                <Bar value={language} key={language.name} />
              ))}
            </div>
          </div>
  
          <div>
            <h5 className="my-3 text-2xl font-bold">Ferramentas & Softwares</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar value={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;
  