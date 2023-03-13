export const headerData = {
    links: 
    [
        {
            text: 'Inicio',
            href: '/',
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
        {title: 'Proyectos', href: '/proyectos' },
        {title: 'Servicios', href: '/servicios' },
        {title: 'Contactanos', href: '/contactanos' },
    ]
}

export const portafolio = {
    proyectos: [
        {title: 'Casa de Retiro Cushing ', description: 'Diseño de Proyecto de Media Tensión', dia: '2021-11-01', anio: '2021', mes: 'Noviembre'},
        {title: 'Dany Herramientas', description: 'Elaboración del Expediente INDECI', dia: '2021-08-01', anio: '2021', mes: 'Agosto'},
        {title: 'Faseel SAC', description: 'Levantamiento de Instalaciones Eléctricas', dia: '2021-02-01', anio: '2021', mes: 'Febrero'},
        {title: 'Galerías Wiltons Áreas Comunes', description: 'Elaboración de Expediente INDECI', dia: '2019-11-01', anio: '2019', mes: 'Noviembre'},
        {title: 'Sala de Juegos Wings Local Las Violetas', description: 'Elaboración Expediente INDECI', dia: '2019-10-01', anio: '2019', mes: 'Octurbre'},
        {title: 'NoriPlay Local VMT ', description: 'Diseño de Instalaciones Eléctricas de local', dia: '2019-03-01', anio: '2019', mes: 'Marzo'},
        {title: 'Mercado Modelo 22 Agosto', description: 'Replanteo de Banco de Medidores', dia: '2019-', anio: '2019', mes: 'Febrero'},
        {title: 'SENATI Sede Chincha', description: 'Revisión de Expediente Instalaciones', dia: '2018-08', anio: '2018', mes: 'Agosto'},
        {title: 'Mi Banco Sede Collique', description: 'Trámite de Aumento de Carga Eléctrica', dia: '2018-04-01', anio: '2018', mes: 'Abril'},
        {title: 'Bellavista Hotel', description: 'Diseño de Instalaciones Eléctricas', dia: '2018-03-01', anio: '2018', mes: 'Febrero'},
        {title: 'Farmacia Hogar & Salud local VMT', description: 'Planos expediente Seguridad', dia: '2018-01-01', anio: '2018', mes: 'Enero'},
        {title: 'Notaría Benvenuto', description: 'Diseño de Instalaciones Eléctricas', dia: '2017-12-01', anio: '2017', mes: 'Diciembre'},
        {title: 'Mercado San Elias', description: 'Diseño de Instalaciones Eléctricas', dia: '2017-11-01', anio: '2017', mes: 'Noviembre'},
        {title: 'Chepita Royal Puente Piedra', description: 'Plano de Instalaciones Eléctricas Tablero de Piscina', dia: '2017-08-08', anio: '2017', mes: 'Agosto'},
        {title: 'Panadería Wiltons', description: 'Elaboración de Expediente INDECI', dia: '2017-07-01', anio: '2017', mes: 'Julio'},
        {title: 'Federación Peruana de Golf', description: 'Diseño de proyecto de Media', dia: '2017-03-01', anio: '2017', mes: 'Marzo'},
        {title: 'Industria Botonera', description: 'Elaboración de expediente', dia: '2017-02-01', anio: '2017', mes: 'Febrero'},
    ]
}

export const asesoria = {
    servicio: [
        {
            title: 'ASESORIA DEFENSA CIVIL',
            img: 'asesoria.png',
            description: 'EXPEDIENTE INDECI',
            frases: 'Profesionales con más de 15 años de Experiencia, con cursos y diplomados en Seguridad.',
            items: [
                {item: 'Plano de Ubicacion de Local'},
                {item: 'Plano de Distribucion Arquitectonica (Actualizado)'},
                {item: 'Plano de senalizacion (Seguridad)'},
                {item: 'Plano de evacuacion (Seguridad)'},
                {item: 'Planos de Tableros Electricos con sus respectivos diagramas Unifilares y Cuadros de Carga'},
                {item: 'Certificado de Operatividad de Detectores de Humo'},
                {item: 'Certificado de Operatividad de Luces de Emergencia'},
                {item: 'Certificado de Operatividad de Central de Alarma CI'},
                {item: 'Protocolo de Sistema de Proteccion a Tierra'},
                {item: 'Certificado de Operatividad de Equipos'},
                {item: 'Memoria de Instalaciones Electricas'},
                {item: 'Calculo de Aforo'},
                {item: 'Memoria Descriptiva de Arquitectura'},
                {item: 'Plan de Seguridad'},
            ]
        }
    ]
}

export const tramites = {
    servicio: [
        {
            title: 'TRÁMTES ELÉCTRICOS ENEL/LUZ DEL SUR',
            img: 'tramites-electricos.png',
            description: '',
            frases: 'Con el respaldo de profesionales colegiados y habilitados por el CIP',
            items: [
                {item: 'Planos Eléctricos en Baja y Media Tensión.'},
                {item: 'Carta de Solicitud de Aumento de Carga '},
                {item: 'Carta de Solicitud de Nuevo Suministro (nuevo medidor)'},
                {item: 'Carta de Solicitud de Banco de Medidores'},
                {item: 'Planos de Instalaciones Eléctricas'},
                {item: 'Croquis de Ubicación del predio'},
                {item: 'Detalles de Instalación de Suministro'},
                {item: 'Calculo de Cargas'},
                {item: 'Diagramas Unifilares'}
            ]
        }
    ]
}

export const adicionales = {
    servicio: [
        {
            title: 'SERVICIOS ADICIONALES',
            img: 'servicios-adicionales.png',
            description: '',
            frases: '',
            items: [
                {item: 'Cálculos de Luminotécnia, desarrollo de proyectos de Iluminación, empleando el DIALux y las normas vigentes para los diversos ambientes tanto en Luxes como en calidad por tipo de tarea visual o actividad.'},
                {item: 'Diseño y Replanteo de Instalaciones Eléctricas (existentes), realizamos el ordenamiento de los circuitos segun el Codigo Nacional de Electricidad (CNE).'},
                {item: 'Diseño de Esquema de Tableros, para mandar a fabricar, según normativa vigente.'}
            ]
        }
    ]
}

