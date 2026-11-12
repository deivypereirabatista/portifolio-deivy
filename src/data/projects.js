export const stackIcons = {
    JavaScript: "/images/icons/icon-javascript.png",
    TypeScript: "/images/icons/icon-typescript.png",
    React: "/images/icons/icon-react.png",
    HTML: "/images/icons/icon-html.png",
    CSS: "/images/icons/icon-css.png",
    Node: "/images/icons/icon-node.png",
    Supabase: "/images/icons/icon-supabase.png",
}

export const projects = [
    {
        title: "Site IDB CENTRAL",
        description: "Site desenvolvido para a Igreja de Deus no Brasil, com o objetivo de apresentar informações, conteúdos e recursos da igreja aos seus membros e visitantes.",
        image: {
            src: "/images/idb-central.png",
            alt: "Página inicial do site da IDB Central Trindade",
            width: 1125,
            height: 673,
        },
        stacks: ["JavaScript", "HTML", "CSS"],
        hosting: "Netlify",
        url: "https://idbcentraltrindade.com.br/",
    },
    {
        title: "Site Pessoal Deivy Batista",
        description: "Site desenvolvido para apresentar serviços de desenvolvimento web, destacando soluções personalizadas, landing pages e sistemas para empresas e profissionais.",
        image: {
            src: "/images/site-deivy.png",
            alt: "Página inicial do site pessoal de Deivy Batista",
            width: 1234,
            height: 853,
        },
        stacks: ["JavaScript", "HTML", "CSS"],
        hosting: "Netlify",
        url: "https://deivybatista.netlify.app/",
    },
    {
        title: "Controle Financeiro Familiar",
        description: "Controle financeiro familiar (contas, cartões, dívidas, orçamentos e metas), feito em parceria com IA e com foco em números confiáveis: 61 testes automatizados e isolamento de dados por usuário. Tem demonstração pública que roda 100% no navegador, sem cadastro e sem salvar nada.",
        image: {
            src: "/images/familiar_demo.png",
            alt: "Página inicial do gerenciamento financeiro familiar",
            width: 1901,
            height: 904,
        },
        stacks: ["React", "TypeScript", "Supabase"],
        hosting: "Render",
        url: "https://controle-financeiro-familiar-b99m.onrender.com/",
    },
]
