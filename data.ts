import {RiComputerLine} from 'react-icons/ri'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { IProject, IService, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
    {
      Icon: RiComputerLine,
      title: "Desenvolvedor Frontend",
      about:
        "Eu posso desenvolver os melhores e mais escaláveis SPA usando <b> HTML</b>,<b>CSS</b> and <b>React.js</b>.",
    },
    {
      Icon: FaServer,
      title: "Desenvolvedor Backend",
      about:
        "Eu posso Construir Banco de Dados e Microserviços usando  <b>API Express </b> & outros frameworks populares.",
    },
    {
      Icon: AiOutlineApi,
      title: "Desenvolvedor API ",
      about:
        "Caso seja necessário, eu posso desenvolver um robusto API REST usando  <b>nestjs </b>  & <b>Node API</b>. ",
    },
    {
      Icon: MdDeveloperMode,
      title: "Aprendizado Contínuo",
      about: "Diariamente estudo para aprimorar minhas habilidades como desenvolvedor <b>Full Stack </b> para resolver problemas do mundo real. </b> ",
    },
    {
      Icon: AiOutlineAntDesign,
      title: "UI/UX designer",
      about:
        "Constantemente produzo protótipos através da plataforma <b>Figma</b> para validação de conceito do <b>Cliente</b>.",
    },
    {
      Icon: RiComputerLine,
      title: "Metodolofia Ágil",
      about:
        "Entrega com qualidade e eficiencia, de forma contínua e progressiva, visando os requisitos funcionais.",
    },
  ];
  
export const languages: Skill[] = [
  {
      Icon: BsCircleFill,
      name: "Python",
      level: "45",
    },
    {
      Icon: BsCircleFill,
      name: "Java Script",
      level: "60",
    },
    {
      Icon: BsCircleFill,
      name: "React Native",
      level: "40",
    },
    {
      Icon: BsCircleFill,
      name: "React",
      level: "70",
    },
    {
      Icon: BsCircleFill,
      name: "Django",
      level: "30",
    },
    {
      Icon: BsCircleFill,
      name: "Bootstrap",
      level: "90",
    },
]; 

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "35",
  },
];