export const headerData = {
    links: 
    [
        {
            text: 'Inicio',
            href: '/',
        },
        {
            text: 'Quienes somos',
            href: '/quienessomos',
        },
        {
            text: 'Proyectos',
            href: '/proyectos',
        },
        {
            text: 'Servicios',
            links: [
                {
                    text: 'Tramítes electrícos ENEL/LUZ DEL SUR',
                    href: '/servicios/tramites',
                },
                {
                    text: 'Asesoría defensa civil',
                    href: '/servicios/asesoria',
                },
                {
                    text: 'Serivios adicionales',
                    href: '/servicios/adicionales',
                },
            ],
        },
        {
            text: 'Contactanos',
            href: '/contactanos',
        },
    ]
};

export const footerMenu = {
    menusinferiores: [
        {title: 'Inicio', href: '/' },
        {title: 'Quienes somos', href: '/quienessomos' },
        {title: 'Proyectos', href: '/proyectos' },
        {title: 'Servicios', href: '/servicios' },
        {title: 'Contactanos', href: '/contactanos' },
    ]

}

const footer_Data = {
    links: [
        {
            title: 'Proyectos',
            tipo: 1,
            href: '/proyectos',
        },
        {
            title: 'Servicios',
            tipo: 1,
            links: [
                {
                    text: 'Instalación y mantenimiento de subastación eléctrica',
                    href: '/servicios/subestacion',
                },
                {
                    text: 'Instalación y mantenimiento de tablero eléctrico',
                    href: '/servicios/tableroelectrico',
                },
                {
                    text: 'Instalación y mantenimiento de sistema de puesta a tierra',
                    href: '/servicios/sistemadepuerta',
                },
                {
                    text: 'Instalación y mantenimiento de grupo electrógeno',
                    href: '/servicios/grupoelectrogeno',
                },
                {
                    text: 'Instalación y mantenimiento de UPS',
                    href: '/servicios/ups',
                },
            ],
        },
        {
            title: 'Empresa',
            tipo: 2,
            links: [
                {
                    text: 'Inicio',
                    href: '/',
                },
                {
                    text: 'Quienes somos',
                    href: '/quienessomos',
                },
            ],
        },
        {
            title: 'Contactanos',
            tipo: 2,
            links: [
                {
                    text: 'Contactanos',
                    href: '/contactanos',
                },
            ],
        },
    ],
    socialLinks: [
        { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
        { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    ],
    footNote: `
      <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
      Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
    `,
};
const links_ = footer_Data.links

const subMenu_Superior = []
const subMenu_Inferior = []

let menu_Superior = links_.filter(function ({tipo}) {
    return tipo === 1;
}).map(function ({title, href='', links=''}) {
    if(href=='')
    {
      for (const i in links) {
        subMenu_Superior.push({title: links[i].text, href: links[i].href})
      }
    }
    return {title, href};
})

let menu_Inferior = links_.filter(function ({tipo}) {
    return tipo === 2;
}).map(function ({title,links}) {
    for (const i in links) {
        subMenu_Inferior.push({title: links[i].text, href: links[i].href})
    }
    return {title };
})
let superior = []
superior['superior'] = menu_Superior

let inferior = []
inferior['inferior'] = menu_Inferior

let submenuInferior = []
submenuInferior['submenuinferior'] = subMenu_Inferior

let submenuSuperior= []
submenuSuperior['submenusuperior'] = subMenu_Superior

export const menuSuperior = superior
export const menuInferior = inferior
export const subMenuInferior = submenuInferior
export const subMenuSuperior = submenuSuperior

export const footerData = footer_Data;
