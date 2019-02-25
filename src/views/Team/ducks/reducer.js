const initialState = {
  advisors: [
  ],
  team: [
    {
      image: require('../assets/neymark.png'),
      name: 'Александр Неймарк',
      position: 'Основатель, CEO',
      description: 'Александр Неймарк имеет значительный опыт запуска и развития инновационных финансовых услуг в банках и телекоммуникационных компаниях (начиная с 2000 года). В 2012 году он начал свою работу по созданию платформы для агрегирования финансовых пользовательских данных (технология агрегирования учетных записей), которая была реализована в финальной разработке Krawlly (krawlly.com) по созданию интеллектуальных сканеров для агрегирования финансовых пользовательских данных.',
      linkedin: 'https://www.linkedin.com/in/neymark/',
    },
    {
      image: require('../assets/kochin.png'),
      name: 'Дмитрий Кочин',
      position: 'Основатель, CTO, PhD',
      description: 'Дмитрий Кочин имеет большой опыт работы в сфере информационных технологий и кандидат технических наук. С 2005 года - частный предприниматель в сфере информационных технологий. Он участвовал в различных проектах по разработке программного обеспечения, связанных с обработкой платежей, агрегацией счетов, компьютерной телефонией и даже финансовыми услугами в онлайн-играх. С 2014 года он поглощен изучением проблем блокчейна и криптовалюты.',
      linkedin: 'https://www.linkedin.com/in/kochin/',
    },
    {
      image: require('../assets/filatov.png'),
      name: 'Антон Филатов',
      position: 'Начальник отдела разработки ПО',
      description: 'Начав свою карьеру программиста в 2006 году, Антон активно участвовал в многочисленных и разнообразных ИТ-проектах, от систем видеонаблюдения, финансовых систем до систем автоматизации государственного уровня. Имеет большой опыт разработки программного обеспечения с использованием современных языков программирования и передовых технологий.',
      linkedin: 'https://www.linkedin.com/in/antonfilatov/',
    },
    {
      image: require('../assets/mukhanov.png'),
      name: 'Сергей Мукханов',
      position: 'Начальник отдела управления продуктами',
      description: 'Сергей Муханов - опытный профессионал с более чем 10-летним опытом управления продуктами и разработки инновационных платежных решений с нуля до 40-миллионной аудитории. Он имеет большой опыт работы с банками, телекоммуникационными компаниями и мировыми платежными системами.',
      linkedin: 'https://www.linkedin.com/in/mukhanov/',
    },
    {
      image: require('../assets/vyatkin.png'),
      name: 'Иван Вяткин',
      position: 'Разработчик ПО',
      description: 'Выпускник МГИМО с 6-летним опытом работы в IT. Участвовал в проектах различного рода: интернет-магазины, медиа-порталы (новости), агрегация аккаунтов (Krawlly) и так далее. С 2014 года Иван работает над разработкой PWA (Progressive Web Apps) и изучает различные идеи по созданию удобного интерфейса UI / UX.',
      linkedin: 'https://www.linkedin.com/in/ivanvyatkin/',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}